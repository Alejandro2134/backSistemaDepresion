import { BaseError } from '../../bases/base_error';
import { ErrorsEnum, HTTPCodesEnum } from '../enums/errors_enums';

export class ErrorResourceNotFound extends BaseError {
    constructor(message: string, metadata?: any) {
        super(
            message,
            ErrorsEnum.HTTP_REQUEST,
            HTTPCodesEnum.RESOURCE_NOT_FOUND,
            metadata
        );
    }
}
