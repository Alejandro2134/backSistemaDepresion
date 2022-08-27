import { QuestionsSQLImplementation } from '@fnd/storage/sql/implementation/question/question_imp';
import { QuestionsRepository } from '../interface_adapters/repositories/question_repository';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buildUpdateOne } from './use_cases/update_one';

const questionsRepo: QuestionsRepository = new QuestionsRepository(
    new QuestionsSQLImplementation()
);

const createOne = buildCreateOne({ questionsRepo });
const getAll = buildGetAll({ questionsRepo })
const deleteOne = buildDeleteOne({ questionsRepo });
const updateOne = buildUpdateOne({ questionsRepo });

const service = {
    createOne,
    getAll,
    deleteOne,
    updateOne
};

export default service;

export { createOne, getAll, deleteOne, updateOne };