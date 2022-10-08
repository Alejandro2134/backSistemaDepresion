import { DataTypes, Model } from 'sequelize';
import { sequelizeConnection } from '../../client/client';
import { IDiagnosisDAL } from './diagnosis_dal';

export class Diagnosis extends Model<IDiagnosisDAL> implements IDiagnosisDAL {
    id!: number;
    cedula!: string;
    nombre!: string;
    resultado!: string;
    observaciones!: string;
    fecha_creacion!: string;
}

Diagnosis.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        cedula: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        resultado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        observaciones: {
            type: DataTypes.TEXT,
        },
        fecha_creacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelizeConnection,
        underscored: true,
        modelName: 'diagnosis',
        freezeTableName: true,
    }
);
