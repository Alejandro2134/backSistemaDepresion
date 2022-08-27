import { ErrorResourceNotFound } from "@common/enterprise_business_rules/dto/errors/resource_not_found";
import { IOperations } from "@fnd/storage/sql/client/interfaces/ioperations";
import { IQuestionFDOM, QuestionDOM } from "@questions/enterprise_business/entities/question/question_dom";

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
}

const build = ({ questionsRepo }: Dependencies) => {
    const execute = async(questionId: number) => {
        const res = await questionsRepo.delete(questionId);
        if (res == 0) throw new ErrorResourceNotFound(`question doesn't exists`);
    }

    return execute;
}

export { build };