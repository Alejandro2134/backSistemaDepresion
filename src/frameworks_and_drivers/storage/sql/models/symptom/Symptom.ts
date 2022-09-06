import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { Question } from '../question/Question';
import { SymptomDAL } from './symptom_dal';

export class Symptom extends Model<SymptomDAL> implements SymptomDAL {
    id!: number;
    sintoma!: string;
    question_id!: number | null;
}

Symptom.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        sintoma: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        question_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Question,
                key: 'id',
            },
            allowNull: true,
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            defaultValue: null,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'symptom',
        freezeTableName: true,
    }
);
