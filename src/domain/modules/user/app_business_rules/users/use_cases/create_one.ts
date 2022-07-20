import {
    IUserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const build = ({ usersRepo }: Dependencies) => {
    const execute = async (item: IUserDOM) => {
        item.contraseña = null;
        const createdUser = await usersRepo.create(item);
        return createdUser;
    };

    return execute;
};

export { build };
