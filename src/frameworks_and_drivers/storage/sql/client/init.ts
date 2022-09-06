import '@fnd/external_interfaces/env';
import { User } from '../models/user/User';
import { DepresionType } from '../models/depresion_type/DepresionType';
import { Diagnosis } from '../models/diagnosis/Diagnosis';
import { Question } from '../models/question/Question';
import { Symptom } from '../models/symptom/Symptom';

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
    Question.hasMany(Symptom, {
        as: 'symptoms',
        foreignKey: 'question_id',
    });
    Symptom.belongsTo(Question);
};

export { dbInit };
