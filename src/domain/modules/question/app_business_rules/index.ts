import { QuestionsSQLImplementation } from '@fnd/storage/sql/implementation/question/question_imp';
import { QuestionsRepository } from '../interface_adapters/repositories/question_repository';
import { build as buildCreateOne } from './use_cases/create_one'; 

const questionsRepo: QuestionsRepository = new QuestionsRepository(
    new QuestionsSQLImplementation()
);

const createOne = buildCreateOne({ questionsRepo });

const service = {
    createOne,
};

export default service;

export { createOne };