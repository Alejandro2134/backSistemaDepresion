import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { ISymptomFDOM, SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

type Dependencies = {
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
}

const build = ({ symptomsRepo }: Dependencies) => {
    const execute = async(item: SymptomDOM) => {
        const createdSymptom = await symptomsRepo.create(item);
        return createdSymptom;
    }

    return execute;
}

export { build };