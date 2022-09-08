import '@fnd/external_interfaces/env';
import { User } from '../models/user/User';
import { DepresionType } from '../models/depresion_type/DepresionType';
import { Diagnosis } from '../models/diagnosis/Diagnosis';
import { Question } from '../models/question/Question';
import { Symptom } from '../models/symptom/Symptom';
import { SymptomQuestion } from '../models/symptom_question/SymptomQuestion';
import { sequelizeConnection } from './client';
import { DepresionTypeSymptom } from '../models/depresion_type_symptom/DepresionTypeSymptom';

const dbInit = async () => {
    await User.sync({ force: false });
    await Question.sync({
        force: process.env.ENV == 'development' ? true : false,
    });
    await Symptom.sync({
        force: process.env.ENV == 'development' ? true : false,
    });
    await DepresionType.sync({
        force: process.env.ENV == 'development' ? true : false,
    });
    await Diagnosis.sync({
        force: process.env.ENV == 'development' ? true : false,
    });
    await createAssociations();
};

const createAssociations = () => {
    Question.belongsToMany(Symptom, { through: SymptomQuestion });
    Symptom.belongsToMany(Question, { through: SymptomQuestion });
    DepresionType.belongsToMany(Symptom, { through: DepresionTypeSymptom });
    Symptom.belongsToMany(DepresionType, { through: DepresionTypeSymptom });
    sequelizeConnection.sync();
};

export { dbInit };
