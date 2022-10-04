import { DepresionTypesRepository } from '@depresion_type/interface_adapters/repositories/depresion_type_repository';
import { DepresionTypesSQLImplementation } from '@fnd/storage/sql/implementation/depresion_type/depresion_type_imp';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buildUpdateOne } from './use_cases/update_one';
import { SymptomsSQLImplementation } from '@fnd/storage/sql/implementation/symptom/symptom_imp';
import { SymptomsRepository } from '@symptoms/interface_adapters/repositories/symptom_repository';

const depresionTypesRepo: DepresionTypesRepository =
    new DepresionTypesRepository(new DepresionTypesSQLImplementation());

const symptomsRepo: SymptomsRepository = new SymptomsRepository(
    new SymptomsSQLImplementation()
);

const createOne = buildCreateOne({ depresionTypesRepo });
const getAll = buildGetAll({ depresionTypesRepo });
const deleteOne = buildDeleteOne({ depresionTypesRepo, symptomsRepo });
const updateOne = buildUpdateOne({ depresionTypesRepo });

const service = {
    createOne,
    getAll,
    deleteOne,
    updateOne,
};

export default service;

export { createOne, getAll, deleteOne, updateOne };
