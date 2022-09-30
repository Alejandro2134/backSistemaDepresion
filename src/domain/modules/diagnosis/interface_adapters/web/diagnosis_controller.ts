import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';
import mapper from './mappers/diagnosis_mapper';
import { NextFunction, Request, Response } from 'express';
import service from '@diagnosis/app_business_rules';

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
}
