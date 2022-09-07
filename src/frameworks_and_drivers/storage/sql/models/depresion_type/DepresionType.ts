import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { Symptom } from '../symptom/Symptom';
import { DepresionTypeDAL } from './depresion_type_dal';

export class DepresionType
    extends Model<DepresionTypeDAL>
    implements DepresionTypeDAL
{
    id!: number;
    tipo_depresion!: string;
    symptom_id!: number;
}

DepresionType.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        tipo_depresion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        symptom_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Symptom,
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
        modelName: 'depresion_type',
        freezeTableName: true,
    }
);
