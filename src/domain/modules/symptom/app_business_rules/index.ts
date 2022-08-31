import { SymptomsSQLImplementation } from '@fnd/storage/sql/implementation/symptom/symptom_imp';
import { SymptomsRepository } from '@symptoms/interface_adapters/repositories/symptom_repository';
import { build as buildCreateOne } from './use_cases/create_one';

const symptomsRepo: SymptomsRepository = new SymptomsRepository(
    new SymptomsSQLImplementation()
);

const createOne = buildCreateOne({ symptomsRepo });

const service = {
    createOne,
};

export default service;

export { createOne };