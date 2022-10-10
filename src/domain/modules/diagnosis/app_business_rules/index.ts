import { DiagnosisRepository } from '@diagnosis/interface_adapters/repositories/diagnosis_repository';
import { DiagnosisSQLImplementation } from '@fnd/storage/sql/implementation/diagnosis/diagnosis_imp';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buildUpdateOne } from './use_cases/update_one';
import { build as buildGeneratePdf } from './use_cases/generate_pdf';

const diagnosisRepo: DiagnosisRepository = new DiagnosisRepository(
    new DiagnosisSQLImplementation()
);

const createOne = buildCreateOne({ diagnosisRepo });
const getAll = buildGetAll({ diagnosisRepo });
const deleteOne = buildDeleteOne({ diagnosisRepo });
const updateOne = buildUpdateOne({ diagnosisRepo });
const generatePdf = buildGeneratePdf({ diagnosisRepo });

const service = {
    createOne,
    getAll,
    deleteOne,
    updateOne,
    generatePdf,
};

export default service;

export { createOne, getAll, deleteOne, updateOne, generatePdf };
