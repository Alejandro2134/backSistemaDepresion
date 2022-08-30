import { Model, DataTypes } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { UserDAL } from './user_dal';

export class User extends Model<UserDAL> implements UserDAL {
    id!: number;
    cedula!: string;
    nombre!: string;
    email!: string;
    contraseña!: string | null;
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
        cedula: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        contraseña: {
            type: DataTypes.STRING,
            allowNull: true,
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
