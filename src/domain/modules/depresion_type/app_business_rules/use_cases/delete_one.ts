import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    DepresionTypeDOM,
    IDepresionTypeFDOM,
} from '@depresion_type/enterprise_business/entities/depresion_type/depresion_type_dom';
import {
    ISymptomFDOM,
    SymptomDOM,
} from '@symptoms/enterprise_business/entities/symptom/symptom_dom';
import { updateOne } from '@symptoms/app_business_rules';

type Dependencies = {
    depresionTypesRepo: IOperations<DepresionTypeDOM, IDepresionTypeFDOM>;
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
};

const build = ({ depresionTypesRepo, symptomsRepo }: Dependencies) => {
    const execute = async (depresionTypeId: number) => {
        const symptoms = await symptomsRepo.getAll({
            tiposDepresion: [depresionTypeId],
        });
        const depresionTypesToRemove: any = {
            removerTiposDepresion: [depresionTypeId],
        };

        symptoms.map(async (symptom) => {
            if (symptom.id) {
                await updateOne(symptom.id, depresionTypesToRemove);
            }
        });

        const res = await depresionTypesRepo.delete(depresionTypeId);
        if (res == 0)
            throw new ErrorResourceNotFound(`depresion type doesn't exists`);
    };

    return execute;
};

export { build };
