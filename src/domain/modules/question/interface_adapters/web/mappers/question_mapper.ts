import { IMapperAPI } from "@common/interface_adapters/web/controllers/bases/imapperapi";
import { QuestionAPI } from "@questions/enterprise_business/dto/question_api";
import { IQuestionDOM, QuestionDOM } from "@questions/enterprise_business/entities/question/question_dom";

export class QuestionMapper implements IMapperAPI<QuestionDOM, QuestionAPI> {
    fromApiToDom(item: QuestionAPI, opts?: any): QuestionDOM {
        const dom = new QuestionDOM({
            id: item.id,
            pregunta: item.pregunta,
            sintomas: item.sintomas
        });

        return dom;
    }

    fromDomToApi(item: IQuestionDOM, opts?: any): QuestionAPI {
        const api = new QuestionAPI({
            id: item.id,
            pregunta: item.pregunta
        });

        return api;
    }
}

const mapper = new QuestionMapper();

export default mapper;