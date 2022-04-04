import { ErrorsEnum, HTTPCodesEnum } from '../enums/errors_enums';
import { BaseError } from '../../bases/base_error';
export class StorageError extends BaseError {
    constructor(metatada?: any) {
        super(
            'Storage error',
            ErrorsEnum.STORAGE_EXCEPTION,
            HTTPCodesEnum.BAD_REQUEST,
            metatada
        );
    }
}