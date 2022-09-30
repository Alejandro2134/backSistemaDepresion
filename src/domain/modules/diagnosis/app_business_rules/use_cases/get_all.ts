import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    diagnosisRepo: IOperations<DiagnosisDOM, IDiagnosisFDOM>;
};

const build = ({ diagnosisRepo }: Dependencies) => {
    const findAll = async (filter: IDiagnosisFDOM) => {
        return await diagnosisRepo.getAll(filter);
    };

    const count = async (filter: IDiagnosisFDOM) => {
        return await diagnosisRepo.countRegisters(filter);
    };

    return {
        findAll,
        count,
    };
};

export { build };
