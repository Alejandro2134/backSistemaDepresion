import { ErrorResourceNotFound } from "@common/enterprise_business_rules/dto/errors/resource_not_found";
import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { ISymptomFDOM, SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

type Dependencies = {
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
}

const build = ({ symptomsRepo }: Dependencies) => {
    const execute = async(symptomId: number) => {
        const res = await symptomsRepo.delete(symptomId);
        if (res == 0) throw new ErrorResourceNotFound(`symptom doesn't exists`);
    }

    return execute;
}

export { build };