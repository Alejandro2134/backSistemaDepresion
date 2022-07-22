import {
    IUserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const USER_ALREADY_EXIST = 'A user with this email already exist';

const build = ({ usersRepo }: Dependencies) => {
    const execute = async (item: IUserDOM) => {
        const { email } = item;
        const user = await usersRepo.getAll({ email: email });

        if(user[0]) {
            throw new ErrorResourceNotFound(USER_ALREADY_EXIST);
        } else {
            item.contraseña = null;
            const createdUser = await usersRepo.create(item);
            return createdUser;
        }
    };

    return execute;
};

export { build };
