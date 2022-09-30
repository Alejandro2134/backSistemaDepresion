import { DiagnosisRepository } from '@diagnosis/interface_adapters/repositories/diagnosis_repository';
import { DiagnosisSQLImplementation } from '@fnd/storage/sql/implementation/diagnosis/diagnosis_imp';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';

const diagnosisRepo: DiagnosisRepository = new DiagnosisRepository(
    new DiagnosisSQLImplementation()
);

const createOne = buildCreateOne({ diagnosisRepo });
const getAll = buildGetAll({ diagnosisRepo });

const service = {
    createOne,
    getAll,
};

export default service;

export { createOne, getAll };
