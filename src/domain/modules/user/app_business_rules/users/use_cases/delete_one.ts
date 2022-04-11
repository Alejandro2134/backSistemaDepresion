import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IUserDOM,
    IUserFDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';

type Dependencies = {
    usersRepo: IOperations<IUserDOM, IUserFDOM>;
};

const build = ({ usersRepo }: Dependencies) => {
    const execute = async (userId: number) => {
        const res = await usersRepo.delete(userId);
        if (res == 0) throw new ErrorResourceNotFound(`user doesn't exists`);
    };

    return execute;
};

export { build };
