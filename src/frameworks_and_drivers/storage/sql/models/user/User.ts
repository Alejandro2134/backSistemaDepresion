import { Model, DataTypes } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { IUserDAL } from './user_dal';

export class User extends Model<IUserDAL> implements IUserDAL {
    id!: number;
    nombre!: string;
    email!: string;
    contraseña!: string;
    es_admin!: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        es_admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'user',
        freezeTableName: true,
    }
);
