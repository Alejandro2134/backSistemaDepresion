import { BaseError } from '../../bases/base_error';
import { ErrorsEnum, HTTPCodesEnum } from '../enums/errors_enums';

export class ErrorBadRequest extends BaseError {
    constructor(message: string, metadata?: any) {
        super(
            `${message}`,
            ErrorsEnum.HTTP_REQUEST,
            HTTPCodesEnum.BAD_REQUEST,
            metadata
        );
    }
}
