import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { hashPassword } from '@fnd/helpers/password_handler';
import { IAditionalOperations, IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IUserDOM,
    IUserFDOM,
    UserDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

type Dependencies = {
    usersRepo: IOperations<UserDOM, IUserFDOM>;
    usersRepoAditionalOperations: IAditionalOperations<UserDOM>
};

const USER_NOT_FOUND_ERROR = 'user not found';
const USER_CANT_BE_UPDATED_ERROR = 'user cant be updated';

const build = ({ usersRepo, usersRepoAditionalOperations }: Dependencies) => {
    const execute = async (email: string, item: IUserDOM) => {
        const user = await usersRepo.getAll({ email: email });
        if (user[0]) {
            if(item.contraseña) {
                item.contraseña = hashPassword(item.contraseña);
            }
    
            const updateUser = user[0].updateUser(item);
            const result = await usersRepoAditionalOperations.updateByEmail(email, updateUser);
            if (!result) throw new ErrorBadRequest(USER_CANT_BE_UPDATED_ERROR);
    
            return result;
        } else {
            throw new ErrorResourceNotFound(USER_NOT_FOUND_ERROR);
        } 
    };

    return execute;
};

export { build };
