import { BaseError } from '../../bases/base_error';

export class ErrorAuth extends BaseError {
    constructor(message: string, http_code: number, metadata?: any) {
        super(`${message}`, http_code, http_code, metadata);
    }
}