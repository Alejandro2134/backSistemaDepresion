import { SymptomsSQLImplementation } from '@fnd/storage/sql/implementation/symptom/symptom_imp';
import { SymptomsRepository } from '@symptoms/interface_adapters/repositories/symptom_repository';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';

const symptomsRepo: SymptomsRepository = new SymptomsRepository(
    new SymptomsSQLImplementation()
);

const createOne = buildCreateOne({ symptomsRepo });
const getAll = buildGetAll({ symptomsRepo });
const deleteOne = buildDeleteOne({ symptomsRepo });

const service = {
    createOne,
    getAll,
    deleteOne
};

export default service;

export { createOne, getAll, deleteOne };