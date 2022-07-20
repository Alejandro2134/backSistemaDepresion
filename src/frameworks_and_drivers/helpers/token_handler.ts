import jwt from 'jsonwebtoken';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY || 'private_key';

export type createTokenFn = (payload: any) => string;

const createToken: createTokenFn = (payload: any) => {
    const token = jwt.sign(payload, JWT_PRIVATE_KEY, {
        expiresIn: '7d',
    });
    return token;
}

export { createToken };
