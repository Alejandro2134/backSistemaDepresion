import { DepresionTypesRepository } from '@depresion_type/interface_adapters/repositories/depresion_type_repository';
import { DepresionTypesSQLImplementation } from '@fnd/storage/sql/implementation/depresion_type/depresion_type_imp';
import { QuestionsSQLImplementation } from '@fnd/storage/sql/implementation/question/question_imp';
import { SymptomsSQLImplementation } from '@fnd/storage/sql/implementation/symptom/symptom_imp';
import { QuestionsRepository } from '@questions/interface_adapters/repositories/question_repository';
import { SymptomsRepository } from '@symptoms/interface_adapters/repositories/symptom_repository';
import { build as buildInferenceMotor } from './use_cases/inference_motor';

const questionsRepo: QuestionsRepository = new QuestionsRepository(
    new QuestionsSQLImplementation()
);

const depresionTypesRepo: DepresionTypesRepository =
    new DepresionTypesRepository(new DepresionTypesSQLImplementation());

const symptomsRepo: SymptomsRepository = new SymptomsRepository(
    new SymptomsSQLImplementation()
);

const inferenceMotor = buildInferenceMotor({
    questionsRepo,
    depresionTypesRepo,
    symptomsRepo,
});

const service = {
    inferenceMotor,
};

export default service;

export { inferenceMotor };
