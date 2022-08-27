import { DataTypes, HasManyAddAssociationsMixin, HasManySetAssociationsMixin, Model } from "sequelize";
import { QuestionDAL } from "./question_dal";
import { sequelizeConnection } from '../../client/client';
import { Symptom } from "../symptom/Symptom";

export class Question extends Model<QuestionDAL> implements QuestionDAL {
    declare setSymptoms: HasManySetAssociationsMixin<Symptom, number>;
    declare addSymptoms: HasManyAddAssociationsMixin<Symptom, number>;

    id!: number;
    pregunta!: string;
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
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'question',
        freezeTableName: true,
    }
)