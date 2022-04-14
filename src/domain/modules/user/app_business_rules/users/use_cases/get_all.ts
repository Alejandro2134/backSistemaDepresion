import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IUserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const build = ({ usersRepo }: Dependencies) => {
    const findAll = async () => {
        const result = await usersRepo.getAll({});
        return result;
    };

    const count = async () => {
        return await usersRepo.countRegisters({});
    };

    return {
        findAll,
        count,
    };
};

export { build };
