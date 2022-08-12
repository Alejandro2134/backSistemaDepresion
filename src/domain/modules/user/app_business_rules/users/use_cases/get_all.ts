import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IUserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const build = ({ usersRepo }: Dependencies) => {
    const findAll = async (filter: IUserFDOM) => {
        const result = await usersRepo.getAll(filter);
        return result;
    };

    const count = async (filter: IUserFDOM) => {
        return await usersRepo.countRegisters(filter);
    };

    return {
        findAll,
        count,
    };
};

export { build };
