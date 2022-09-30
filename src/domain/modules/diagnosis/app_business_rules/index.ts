import { DiagnosisRepository } from '@diagnosis/interface_adapters/repositories/diagnosis_repository';
import { DiagnosisSQLImplementation } from '@fnd/storage/sql/implementation/diagnosis/diagnosis_imp';
import { build as buildCreateOne } from './use_cases/create_one';

const diagnosisRepo: DiagnosisRepository = new DiagnosisRepository(
    new DiagnosisSQLImplementation()
);

const createOne = buildCreateOne({ diagnosisRepo });

const service = {
    createOne,
};

export default service;

export { createOne };
