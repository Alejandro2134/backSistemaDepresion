import { UsersRepository } from '@users/interface_adapters/repositories/user/user_repository';

import { UsersSQLImplementation } from '@fnd/storage/sql/implementation/user/user_imp';

import { build as buildCreateUsers } from './use_cases/create_one';

const usersRepo: UsersRepository = new UsersRepository(new UsersSQLImplementation());

const createOne = buildCreateUsers({ usersRepo });

const service = {
    createOne
}

export default service;

export {
    createOne
}