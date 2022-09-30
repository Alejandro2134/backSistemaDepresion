import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    diagnosisRepo: IOperations<DiagnosisDOM, IDiagnosisFDOM>;
};

const build = ({ diagnosisRepo }: Dependencies) => {
    const execute = async (diagnosisId: number) => {
        const res = await diagnosisRepo.delete(diagnosisId);
        if (res == 0)
            throw new ErrorResourceNotFound(`diagnosis doesn't exists`);
    };

    return execute;
};

export { build };
