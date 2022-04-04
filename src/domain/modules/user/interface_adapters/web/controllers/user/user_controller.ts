import { HTTPCodesEnum } from "@common/enterprise_business_rules/dto/enums/errors_enums";
import { ApiResponse } from "@common/enterprise_business_rules/dto/responses/api_response";
import service from "@users/app_business_rules/users";
import mapper from "./mappers/user_mapper";
import { NextFunction, Response, Request } from "express";

export class UserController {
    async createOne(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;

            const result = await service.createOne(
                mapper.fromApiToDom(body),
            );
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