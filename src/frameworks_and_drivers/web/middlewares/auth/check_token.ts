import { HTTPCodesEnum } from "@common/enterprise_business_rules/dto/enums/errors_enums";
import { ErrorAuth } from "@common/enterprise_business_rules/dto/errors/auth_error";
import { checkToken } from "@fnd/helpers/token_handler";
import { NextFunction, RequestHandler, Response } from "express";
import unlessFn, { Options } from 'express-unless';

export type UnlessFn = (options: Options) => RequestHandler;

const USER_PROPERTY = 'user';
const TOKEN_EXPIRED_ERR = 'TokenExpiredError';

export type TokenMiddleware = {
    (req: any, res: Response, next: NextFunction): Promise<void>;
    unless: UnlessFn;
};

const checkTokenMiddleware = () => {
    const middleware: TokenMiddleware = async(req: any, res: Response, next: NextFunction) => {
        try {
            const { authorization } = req.headers;
            const onlyToken = authorization.replace(/Bearer /g, '');
            req[USER_PROPERTY] = checkToken(onlyToken);
            next();
        } catch (err: any) {
            if (err.name === TOKEN_EXPIRED_ERR) {
                next(
                    new ErrorAuth('Token expired', HTTPCodesEnum.UNAUTHORIZED)
                );
            } else {
                next(
                    new ErrorAuth(
                        'A valid token has not been provided',
                        HTTPCodesEnum.FORBIDDEN
                    )
                );
            }
        }
    }
    middleware['unless'] = unlessFn;
    return middleware;
}

export default checkTokenMiddleware;