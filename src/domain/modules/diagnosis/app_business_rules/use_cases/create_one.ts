import {
    DiagnosisDOM,
    IDiagnosisFDOM,
} from '@diagnosis/enterprise_business/entities/diagnosis_dom';
import { changeFormatDate } from '@fnd/external_interfaces/datetime';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';

type Dependencies = {
    diagnosisRepo: IOperations<DiagnosisDOM, IDiagnosisFDOM>;
};

const build = ({ diagnosisRepo }: Dependencies) => {
    const execute = async (item: DiagnosisDOM) => {
        item.fechaCreacion = changeFormatDate(new Date(Date.now()));

        const createdDiagnosis = await diagnosisRepo.create(item);
        return createdDiagnosis;
    };

    return execute;
};

export { build };
