import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../client/client";
import { ISymptomDAL } from "./symptom_dal";

export class Symptom extends Model<ISymptomDAL> implements ISymptomDAL {
    id!: number;
    sintoma!: string;
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
            allowNull: false
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'symptom',
        freezeTableName: true,
    }
);