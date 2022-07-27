import { BaseError } from '../../bases/base_error';
import { HTTPCodesEnum } from '../enums/errors_enums';

export class ErrorBadRequest extends BaseError {
    constructor(message: string, metadata?: any) {
        super(
            `${message}`,
            HTTPCodesEnum.BAD_REQUEST,
            HTTPCodesEnum.BAD_REQUEST,
            metadata
        );
    }
}
