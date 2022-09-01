import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { ISymptomFDOM, SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

type Dependencies = {
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
}

const build = ({ symptomsRepo }: Dependencies) => {
    const findAll = async(filter: ISymptomFDOM) => {
        return await symptomsRepo.getAll(filter);
    }

    const count = async(filter: ISymptomFDOM) => {
        return await symptomsRepo.countRegisters(filter);
    }

    return {
        findAll,
        count
    };
}

export { build };