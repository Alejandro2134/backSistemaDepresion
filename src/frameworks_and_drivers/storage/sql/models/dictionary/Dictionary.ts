import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { DictionaryDAL } from './dictionary_dal';

export class Dictionary extends Model<DictionaryDAL> implements DictionaryDAL {
    id!: string;
    termino!: string;
    descripcion!: string;
}

Dictionary.init(
    {
        id: {
            primaryKey: true,
            allowNull: false,
            type: DataTypes.INTEGER,
            autoIncrement: true,
        },
        termino: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        descripcion: {
            allowNull: false,
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'dictionary',
        freezeTableName: true,
    }
);
