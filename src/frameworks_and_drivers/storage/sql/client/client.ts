import '@fnd/external_interfaces/env';
import { Sequelize, Dialect } from 'sequelize';

const databaseHost = process.env.DATABASE_HOST || 'localhost';
const databaseName = process.env.DATABASE_NAME as string;
const databaseUser = process.env.DATABASE_USER as string;
const databasePassword = process.env.DATABASE_PASSWORD;
const databaseDriver = (process.env.DATABASE_DRIVER as Dialect) || 'postgres';

const sequelizeConnection = new Sequelize(
    databaseName,
    databaseUser,
    databasePassword,
    {
        host: databaseHost,
        dialect: databaseDriver,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        },
    }
);

export { sequelizeConnection };
