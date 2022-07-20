import bcrypt from 'bcrypt';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

export type hashPasswordFn = (password: string) => string;
export type comparePasswordFn = (password, hash) => boolean;

const hashPassword: hashPasswordFn = (password: string) => {
    const salt = bcrypt.genSaltSync(+SALT_ROUNDS);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const comparePassword: comparePasswordFn = (password: string, hash: string) => {
    return bcrypt.compareSync(password, hash);
}

export { hashPassword, comparePassword }; 