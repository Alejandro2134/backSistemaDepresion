import { IMapperAPI } from "@common/interface_adapters/web/controllers/bases/imapperapi";
import { fromCamelToSnake } from "@fnd/helpers/from_camel_to_snake";
import { QuestionAPI } from "@questions/enterprise_business/dto/question_api";
import { QuestionDOM } from "@questions/enterprise_business/entities/question/question_dom";

export class QuestionMapper implements IMapperAPI<QuestionDOM, QuestionAPI> {
    fromApiToDom(item: QuestionAPI, opts?: any): QuestionDOM {
        const dom = new QuestionDOM({
            id: item.id,
            pregunta: item.pregunta,
            sintomas: item.sintomas
        });

        return dom;
    }

    fromDomToApi(item: QuestionDOM, opts?: any): QuestionAPI {
        const api = new QuestionAPI({
            id: item.id,
            pregunta: item.pregunta
        });

        if(item.symptoms) {
            api.symptoms = item.symptoms.map(fromCamelToSnake);
        }

        return api;
    }
}

const mapper = new QuestionMapper();

export default mapper;