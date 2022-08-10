import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import jwt from 'jsonwebtoken';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'private_key';

export type createTokenFn = (payload: any) => string;
export type checkTokenFn = (token: string) => string | jwt.JwtPayload;

const createToken: createTokenFn = (payload: any) => {
    const token = jwt.sign(payload, JWT_PRIVATE_KEY, {
        expiresIn: '24h',
    });
    return token;
}

const checkToken: checkTokenFn = (token: string) => {
    try {
        const payload = jwt.verify(token, JWT_PRIVATE_KEY);
        return payload;
    } catch (err) {
        throw new ErrorResourceNotFound('Invalid Token');
    }
}

export { createToken, checkToken };
