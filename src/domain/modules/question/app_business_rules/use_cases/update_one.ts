import { ErrorBadRequest } from '@common/enterprise_business_rules/dto/errors/bad_request';
import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import {
    IQuestionDOM,
    IQuestionFDOM,
    QuestionDOM,
} from '@questions/enterprise_business/entities/question/question_dom';

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
};

const QUESTION_NOT_FOUND_ERROR = 'question not found';
const QUESTION_CANT_BE_UPDATED_ERROR = 'question cant be updated';

const build = ({ questionsRepo }: Dependencies) => {
    const execute = async (id: number, item: IQuestionDOM) => {
        const question = await questionsRepo.getAll({ id: id });
        if (question[0]) {
            const updateQuestion = question[0].updateQuestion(item);
            const result = await questionsRepo.update(id, updateQuestion);
            if (!result)
                throw new ErrorBadRequest(QUESTION_CANT_BE_UPDATED_ERROR);

            return result;
        } else {
            throw new ErrorResourceNotFound(QUESTION_NOT_FOUND_ERROR);
        }
    };

    return execute;
};

export { build };
