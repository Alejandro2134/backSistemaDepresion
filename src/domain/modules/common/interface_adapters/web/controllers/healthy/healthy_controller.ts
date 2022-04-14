import { HTTPCodesEnum } from '@common/enterprise_business_rules/dto/enums/errors_enums';
import { ApiResponse } from '@common/enterprise_business_rules/dto/responses/api_response';
import { NextFunction, Request, Response } from 'express';
import * as info from '../../../../../../../../package.json';

const svc = process.env.APP_ID || 'Service';
const env = process.env.NODE_ENV || 'development';

export interface IHealthy {
    message: string;
    environment: string;
    version: string;
}

const healthy: IHealthy = {
    message: `${svc} OK 👽`,
    environment: env,
    version: info.version,
};

export class HealthyController {
    get(req: Request, res: Response, next: NextFunction) {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(
                new ApiResponse<IHealthy>(HTTPCodesEnum.SUCCESSFUL, healthy)
            );
        } catch (error) {
            next(error);
        }
    }

    readiness(req: Request, res: Response, next: NextFunction): void {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(
                new ApiResponse<IHealthy>(HTTPCodesEnum.SUCCESSFUL, healthy)
            );
        } catch (error) {
            next(error);
        }
    }

    health(req: Request, res: Response, next: NextFunction): void {
        try {
            res.status(HTTPCodesEnum.SUCCESSFUL);
            res.send(
                new ApiResponse<IHealthy>(HTTPCodesEnum.SUCCESSFUL, healthy)
            );
        } catch (error) {
            next(error);
        }
    }
}
