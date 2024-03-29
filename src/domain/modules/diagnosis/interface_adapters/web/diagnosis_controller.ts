import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';
import mapper from './mappers/diagnosis_mapper';
import { NextFunction, Request, Response } from 'express';
import service from '@diagnosis/app_business_rules';
import { ListResponse } from '@common/enterprise_business_rules/dto/responses/list_response';

export class DiagnosisController {
    async createOne(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const result = await service.createOne(mapper.fromApiToDom(body));
            res.status(HTTPCodesEnum.CREATED).json(
                new ApiResponse(
                    HTTPCodesEnum.CREATED,
                    mapper.fromDomToApi(result)
                )
            );
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: any, res: Response, next: NextFunction) {
        try {
            const { filter } = req.query;
            const result = await service.getAll.findAll(filter);
            const count = await service.getAll.count(filter);

            res.status(HTTPCodesEnum.SUCCESSFUL).json(
                new ApiResponse(
                    HTTPCodesEnum.SUCCESSFUL,
                    new ListResponse(result.map(mapper.fromDomToApi), count)
                )
            );
        } catch (err) {
            next(err);
        }
    }

    async deleteOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            await service.deleteOne(+id);

            res.sendStatus(HTTPCodesEnum.NOT_CONTENT);
        } catch (error) {
            next(error);
        }
    }

    async updateOne(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const body = req.body;

            const result = await service.updateOne(
                +id,
                mapper.fromApiToDom(body)
            );

            res.status(HTTPCodesEnum.SUCCESSFUL).json(
                new ApiResponse(
                    HTTPCodesEnum.SUCCESSFUL,
                    mapper.fromDomToApi(result)
                )
            );
        } catch (err) {
            next(err);
        }
    }

    async generatePdf(req: any, res: Response, next: NextFunction) {
        try {
            const { filter } = req.query;
            const result = await service.generatePdf(filter);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader(
                'Content-Disposition',
                'attachment; filename=quote.pdf'
            );
            result.pipe(res);
            result.end();
        } catch (err) {
            next(err);
        }
    }
}
