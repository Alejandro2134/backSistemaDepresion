import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../client/client";
import { IDepresionTypeDAL } from "./depresion_type_dal";

export class DepresionType extends Model<IDepresionTypeDAL> implements IDepresionTypeDAL {
    id!: number;
    depresion_type!: string;
    sintoma_id!: number;
}

DepresionType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        depresion_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sintoma_id: {
            type: DataTypes.NUMBER,
        }
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'depresion_type',
        freezeTableName: true,
    }
)