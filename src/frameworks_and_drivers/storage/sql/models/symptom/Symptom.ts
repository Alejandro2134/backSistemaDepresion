import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../client/client";
import { ISymptomDAL } from "./symptom_dal";
import { DepresionType } from "../depresion_type/DepresionType";

export class Symptom extends Model<ISymptomDAL> implements ISymptomDAL {
    id!: number;
    sintoma!: string;
    pregunta_id!: number;
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
        pregunta_id: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'symptom',
        freezeTableName: true,
    }
);

Symptom.hasMany(DepresionType, {
    foreignKey: 'sintoma_id'
});
DepresionType.belongsTo(Symptom, {
    foreignKey: 'sintoma_id'
});