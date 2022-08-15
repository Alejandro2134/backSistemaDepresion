import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../client/client";
import { IDepresionTypeDAL } from "./depresion_type_dal";

export class DepresionType extends Model<IDepresionTypeDAL> implements IDepresionTypeDAL {
    id!: number;
    depresion_type!: string;
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
        }
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'depresion_type',
        freezeTableName: true,
    }
)