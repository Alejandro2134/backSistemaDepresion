import { UsersRepository } from '@users/interface_adapters/repositories/user/user_repository';

import { UsersSQLImplementation } from '@fnd/storage/sql/implementation/user/user_imp';

import { build as buildCreateUsers } from './use_cases/create_one';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buildUpdateOne } from './use_cases/update_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildLogin } from './use_cases/login';

const usersRepo: UsersRepository = new UsersRepository(
    new UsersSQLImplementation()
);
const usersRepoAditionalOperations: UsersRepository = new UsersRepository(
    new UsersSQLImplementation()
);

const createOne = buildCreateUsers({ usersRepo });
const deleteOne = buildDeleteOne({ usersRepo });
const updateOne = buildUpdateOne({ usersRepo, usersRepoAditionalOperations });
const getAll = buildGetAll({ usersRepo });
const login = buildLogin({ usersRepo });

const service = {
    createOne,
    deleteOne,
    updateOne,
    getAll,
    login
};

export default service;

export { createOne, deleteOne, updateOne, getAll, login };
