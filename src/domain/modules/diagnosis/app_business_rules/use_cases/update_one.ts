import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import {
    DiagnosisDOM,
    IDiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    diagnosisRepo: IOperations<DiagnosisDOM, IDiagnosisFDOM>;
};

const DIAGNOSIS_NOT_FOUND_ERROR = 'diagnosis not found';
const DIAGNOSIS_CANT_BE_UPDATED_ERROR = 'diagnosis cant be updated';

const build = ({ diagnosisRepo }: Dependencies) => {
    const execute = async (id: number, item: IDiagnosisDOM) => {
        const diagnosis = await diagnosisRepo.getAll({ id: id });
        if (diagnosis[0]) {
            const updateDiagnosis = diagnosis[0].updateDiagnosis(item);
            const result = await diagnosisRepo.update(id, updateDiagnosis);
            if (!result)
                throw new ErrorBadRequest(DIAGNOSIS_CANT_BE_UPDATED_ERROR);

            return result;
        } else {
            throw new ErrorResourceNotFound(DIAGNOSIS_NOT_FOUND_ERROR);
        }
    };

    return execute;
};

export { build };
