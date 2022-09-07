import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { ISymptomQuestionDAL } from './symptom_question_dal';

export class SymptomQuestion
    extends Model<ISymptomQuestionDAL>
    implements ISymptomQuestionDAL
{
    id!: string;
}

SymptomQuestion.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'symptom_question',
        freezeTableName: true,
    }
);
