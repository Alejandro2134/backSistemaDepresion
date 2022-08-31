import { IMapperAPI } from "@common/interface_adapters/web/controllers/bases/imapperapi";
import { SymptomAPI } from "@symptoms/enterprise_business/dto/symptom_api";
import { SymptomDOM } from "@symptoms/enterprise_business/entities/symptom/symptom_dom";

export class SymptomMapper implements IMapperAPI<SymptomDOM, SymptomAPI> {
    fromApiToDom(item: SymptomAPI, opts?: any): SymptomDOM {
        const dom = new SymptomDOM({
            id: item.id,
            sintoma: item.sintoma
        });

        return dom;
    }

    fromDomToApi(item: SymptomDOM, opts?: any): SymptomAPI {
        const api = new SymptomAPI({
            id: item.id,
            sintoma: item.sintoma
        });

        return api;
    }
}

const mapper = new SymptomMapper();

export default mapper;