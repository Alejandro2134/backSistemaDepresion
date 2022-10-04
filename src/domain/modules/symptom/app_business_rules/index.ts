import { SymptomsSQLImplementation } from '@fnd/storage/sql/implementation/symptom/symptom_imp';
import { SymptomsRepository } from '@symptoms/interface_adapters/repositories/symptom_repository';
import { build as buildCreateOne } from './use_cases/create_one';
import { build as buildGetAll } from './use_cases/get_all';
import { build as buildDeleteOne } from './use_cases/delete_one';
import { build as buiildUpdateOne } from './use_cases/update_one';
import { QuestionsRepository } from '@questions/interface_adapters/repositories/question_repository';
import { QuestionsSQLImplementation } from '@fnd/storage/sql/implementation/question/question_imp';

const questionsRepo: QuestionsRepository = new QuestionsRepository(
    new QuestionsSQLImplementation()
);
const symptomsRepo: SymptomsRepository = new SymptomsRepository(
    new SymptomsSQLImplementation()
);

const createOne = buildCreateOne({ symptomsRepo });
const getAll = buildGetAll({ symptomsRepo });
const deleteOne = buildDeleteOne({ symptomsRepo, questionsRepo });
const updateOne = buiildUpdateOne({ symptomsRepo });

const service = {
    createOne,
    getAll,
    deleteOne,
    updateOne,
};

export default service;

export { createOne, getAll, deleteOne, updateOne };
