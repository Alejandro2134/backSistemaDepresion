import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { IDepresionTypeSymptomDAL } from './depresion_type_symptom_dal';

export class DepresionTypeSymptom
    extends Model<IDepresionTypeSymptomDAL>
    implements IDepresionTypeSymptomDAL
{
    id!: string;
}

DepresionTypeSymptom.init(
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
        modelName: 'depresion_type_symptom',
        freezeTableName: true,
    }
);
