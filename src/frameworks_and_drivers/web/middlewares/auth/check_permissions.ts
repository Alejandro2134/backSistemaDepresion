import { HTTPCodesEnum } from "@common/enterprise_business_rules/dto/enums/errors_enums";
import { ErrorAuth } from "@common/enterprise_business_rules/dto/errors/auth_error";
import { IAuth } from "domain/modules/auth/enterprise_business/dto/auth_api";
import { NextFunction, Response } from "express";

const USER_PROPERTY = 'user';

const checkPermissionsMiddleware = (required: boolean) => {
    const middleware = async (req: any, res: Response, next: NextFunction) => {
        try {
            const user: IAuth = req[USER_PROPERTY];
            
            if(user) {
                if(user.es_admin) {
                    next();
                } else {
                    if(user.es_admin == required) {
                        next();
                    } else {
                        throw new ErrorAuth('Permission denied', HTTPCodesEnum.FORBIDDEN);
                    }
                }
            } else {
                throw new ErrorAuth('Not autenthicated', HTTPCodesEnum.UNAUTHORIZED);
            }
        } catch (err) {
            next(err);
        }
    };

    return middleware;
};

export default checkPermissionsMiddleware;