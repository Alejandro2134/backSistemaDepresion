import { BaseError } from '../../bases/base_error';
import { HTTPCodesEnum } from '../enums/errors_enums';

export class ErrorResourceNotFound extends BaseError {
    constructor(message: string, metadata?: any) {
        super(
            message,
            HTTPCodesEnum.RESOURCE_NOT_FOUND,
            HTTPCodesEnum.RESOURCE_NOT_FOUND,
            metadata
        );
    }
}
