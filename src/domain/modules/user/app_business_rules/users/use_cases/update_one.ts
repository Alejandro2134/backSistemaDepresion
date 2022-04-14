import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IUserDOM,
    IUserFDOM,
    UserDOM,
} from '@users/enterprise_bussines/entities/user/user_dom';

type Dependencies = {
    usersRepo: IOperations<UserDOM, IUserFDOM>;
};

const build = ({ usersRepo }: Dependencies) => {
    const execute = async (id: number, item: IUserDOM) => {
        const user = await usersRepo.getOne(id);
        if (!user) throw new ErrorResourceNotFound(`user doesn't exist`);

        const updateUser = user.updateUser(item);
        const result = await usersRepo.update(id, updateUser);
        if (!result) throw new ErrorBadRequest('Verify sended data');

        return result;
    };

    return execute;
};

export { build };
