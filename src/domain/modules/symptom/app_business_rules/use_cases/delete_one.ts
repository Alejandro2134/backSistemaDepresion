import { ErrorResourceNotFound } from '@common/enterprise_business_rules/dto/errors/resource_not_found';
import { IOperations } from '@fnd/storage/sql/client/interfaces/ioperations';
import { updateOne } from '@questions/app_business_rules';
import {
    IQuestionFDOM,
    QuestionDOM,
} from '@questions/enterprise_business/entities/question/question_dom';
import {
    ISymptomFDOM,
    SymptomDOM,
} from '@symptoms/enterprise_business/entities/symptom/symptom_dom';

type Dependencies = {
    questionsRepo: IOperations<QuestionDOM, IQuestionFDOM>;
    symptomsRepo: IOperations<SymptomDOM, ISymptomFDOM>;
};

const build = ({ symptomsRepo, questionsRepo }: Dependencies) => {
    const execute = async (symptomId: number) => {
        const questions = await questionsRepo.getAll({ sintomas: [symptomId] });
        const symptomsToRemove: any = {
            removerSintomas: [symptomId],
        };

        questions.map(async (question) => {
            if (question.id) {
                await updateOne(question.id, symptomsToRemove);
            }
        });

        const res = await symptomsRepo.delete(symptomId);
        if (res == 0) throw new ErrorResourceNotFound(`symptom doesn't exists`);
    };

    return execute;
};

export { build };
