import { ErrorBadRequest } from "@common/enterprise_business_rules/dto/errors/bad_request";
import { ErrorResourceNotFound } from "@common/enterprise_business_rules/dto/errors/resource_not_found";
import { StorageError } from "@common/enterprise_business_rules/dto/errors/storage_error";
import { comparePassword } from "@fnd/helpers/password_handler";
import { createToken } from "@fnd/helpers/token_handler";
import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { IAuthDOM, IUserDOM, IUserFDOM } from "@users/enterprise_bussines/entities/user/user_dom";

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const USER_NOT_FOUND_ERROR = 'User with provided email dont exist';
const CREDENTIALS_ERROR = 'Please verify your credentials';
const USER_DONT_HAVE_PASSWORD_ERROR = 'The user dont have a password';

const build = ({ usersRepo }: Dependencies) => {
    const execute = async(auth: IAuthDOM) => {
        const { email, contraseña } = auth;
        const user = await usersRepo.getAll({ email: email });
        
        if(user[0]) {
            if(user[0].contraseña) {
                const isValidPassword = comparePassword(contraseña, user[0].contraseña);

                if(isValidPassword) {
                    const payload = { sub: user[0].cedula, es_admin: user[0].esAdmin };
                    const token = createToken(payload);

                    return {
                        token: token,
                        es_admin: user[0].esAdmin,
                        email: user[0].email
                    };
                } else {
                    throw new ErrorBadRequest(CREDENTIALS_ERROR);
                }
            } else {
                throw new StorageError(USER_DONT_HAVE_PASSWORD_ERROR);
            }
        } else {
            throw new ErrorResourceNotFound(USER_NOT_FOUND_ERROR);
        }
    }

    return execute;
}

export { build };