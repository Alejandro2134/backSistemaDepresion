import {
    BelongsToManyAddAssociationsMixin,
    BelongsToManyRemoveAssociationsMixin,
    DataTypes,
    Model,
} from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { DepresionType } from '../depresion_type/DepresionType';
import { SymptomDAL } from './symptom_dal';

export class Symptom extends Model<SymptomDAL> implements SymptomDAL {
    declare addDepresion_types: BelongsToManyAddAssociationsMixin<
        DepresionType,
        number
    >;
    declare removeDepresion_types: BelongsToManyRemoveAssociationsMixin<
        DepresionType,
        number
    >;

    id!: number;
    sintoma!: string;
    tipos_depresion!: number[];
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
        tipos_depresion: {
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'symptom',
        freezeTableName: true,
    }
);
