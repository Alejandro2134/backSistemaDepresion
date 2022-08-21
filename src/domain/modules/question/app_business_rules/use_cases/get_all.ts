import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { IQuestionFDOM, QuestionDOM } from "@questions/enterprise_business/entities/question/question_dom";

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
}

const build = ({ questionsRepo }: Dependencies) => {
    const findAll = async(filter: IQuestionFDOM) => {
        return await questionsRepo.getAll(filter);
    }

    const count = async(filter: IQuestionFDOM) => {
        return await questionsRepo.countRegisters(filter);
    }

    return {
        findAll,
        count
    };
}

export { build };