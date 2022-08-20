import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { IQuestionFDOM, QuestionDOM } from "../../enterprise_business/entities/question/question_dom";

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
}

const build = ({ questionsRepo }: Dependencies) => {
    const execute = async(item: QuestionDOM) => {
        const createdQuestion = await questionsRepo.create(item);
        return createdQuestion;
    }

    return execute;
}

export { build };