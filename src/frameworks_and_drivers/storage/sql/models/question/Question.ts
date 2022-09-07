import {
    DataTypes,
    BelongsToManyAddAssociationsMixin,
    BelongsToManyRemoveAssociationsMixin,
    Model,
} from 'sequelize';
import { QuestionDAL } from './question_dal';
import { sequelizeConnection } from '../../client/client';
import { Symptom } from '../symptom/Symptom';

export class Question extends Model<QuestionDAL> implements QuestionDAL {
    declare addSymptoms: BelongsToManyAddAssociationsMixin<Symptom, number>;
    declare removeSymptoms: BelongsToManyRemoveAssociationsMixin<
        Symptom,
        number
    >;

    id!: number;
    pregunta!: string;
    sintomas!: number[];
}

Question.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        pregunta: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sintomas: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'question',
        freezeTableName: true,
    }
);
