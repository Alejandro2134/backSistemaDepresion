import { DataTypes, Model } from "sequelize";
import { IQuestionDAL } from "./question_dal";
import { sequelizeConnection } from '../../client/client';

export class Question extends Model<IQuestionDAL> implements IQuestionDAL {
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