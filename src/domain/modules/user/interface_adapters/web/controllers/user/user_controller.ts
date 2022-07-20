import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';
import service from '@users/app_business_rules/users';
import mapper from './mappers/user_mapper';
import { NextFunction, Response, Request } from 'express';
import { ListResponse } from '@common/enterprise_business_rules/dto/responses/list_response';

export class UserController {
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
            const { email } = req.params;
            const body = req.body;

            const result = await service.updateOne(
                email,
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
    
    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const result = await service.getAll.findAll();
            const count = await service.getAll.count();

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

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const token = await service.login(body);

            res.status(HTTPCodesEnum.SUCCESSFUL).json(
                new ApiResponse(
                    HTTPCodesEnum.SUCCESSFUL,
                    token
                )
            )
        } catch (err) {
            next(err);
        }
    }
}
