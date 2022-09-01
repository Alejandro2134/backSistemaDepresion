import { HTTPCodesEnum } from "@common/enterprise_business_rules/dto/enums/errors_enums";
import { ApiResponse } from "@common/enterprise_business_rules/dto/responses/api_response";
import { ListResponse } from "@common/enterprise_business_rules/dto/responses/list_response";
import service from "@symptoms/app_business_rules";
import { NextFunction, Response, Request } from "express";
import mapper from "./mappers/symptom_mapper";

export class SymptomController {
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
}