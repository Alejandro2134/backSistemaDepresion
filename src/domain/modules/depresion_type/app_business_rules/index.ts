import { DepresionTypesRepository } from '@depresion_type/interface_adapters/repositories/depresion_type_repository';
import { DepresionTypesSQLImplementation } from '@fnd/storage/sql/implementation/depresion_type/depresion_type_imp';
import { build as buildGetOne } from './use_cases/create_one';

const depresionTypesRepo: DepresionTypesRepository =
    new DepresionTypesRepository(new DepresionTypesSQLImplementation());

const createOne = buildGetOne({ depresionTypesRepo });

const service = {
    createOne,
};

export default service;

export { createOne };
