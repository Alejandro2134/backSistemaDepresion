import '@fnd/external_interfaces/env';
import { Sequelize, Dialect } from 'sequelize';
import logger from '@fnd/external_interfaces/logger';

const Logger = logger(__filename);

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

const testDb = async () => {
    try {
        await sequelizeConnection.authenticate();
        Logger.warn('DB connected correctly');
    } catch (error: unknown) {
        if (error instanceof Error)
                Logger.error(`ERROR : ${error.message} STACK : ${error.stack}`);
    }
}

export { sequelizeConnection, testDb };
