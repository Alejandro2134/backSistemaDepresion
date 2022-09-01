import { ErrorBadRequest } from "@common/enterprise_business_rules/dto/errors/bad_request";
import { ErrorResourceNotFound } from "@common/enterprise_business_rules/dto/errors/resource_not_found";
import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { ISymptomDOM, ISymptomFDOM, SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

type Dependencies = {
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
}

const SYMPTOM_NOT_FOUND_ERROR = 'symptom not found';
const SYMPTOM_CANT_BE_UPDATED_ERROR = 'symptom cant be updated';

const build = ({ symptomsRepo }: Dependencies) => {
    const execute = async(id: number, item: ISymptomDOM) => {
        const symptom = await symptomsRepo.getAll({id: id});
        if(symptom[0]) {
            const updateSymptom = symptom[0].updateSymptom(item);
            const result = await symptomsRepo.update(id, updateSymptom);
            if (!result) throw new ErrorBadRequest(SYMPTOM_CANT_BE_UPDATED_ERROR);
    
            return result;
        } else {
            throw new ErrorResourceNotFound(SYMPTOM_NOT_FOUND_ERROR);
        }
    }

    return execute;
}

export { build };