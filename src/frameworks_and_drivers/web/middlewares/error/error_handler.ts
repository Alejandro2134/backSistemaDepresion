import { Request, Response, NextFunction } from 'express';
import logger from '../../../external_interfaces/logger';
import { BaseError } from '@common/enterprise_business_rules/bases/base_error';
import { ApiError } from '@common/enterprise_business_rules/dto/errors/api_error';
const Logger = logger(__filename);
/**
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
export default function (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    if (!err) {
        next();
        return;
    }
    /**Logging Error */
    Logger.error(`ERROR : ${err.message} STACK : ${err.stack}`);
    if (err instanceof BaseError) {
        res.status(err.status || 500).json(
            new ApiError(err.code, err.error, err.metadata)
        );
    } else if (err instanceof Error) {
        res.status(500).json(new ApiError(500, err.message));
    } else {
        /**EL SUPER ERROR MEGADESCONOCIDO */
        res.status(500).json(
            new ApiError(500, 'w daaaaaaa fuk, we are diying 🧟🧟🧟🧟')
        );
    }
}
