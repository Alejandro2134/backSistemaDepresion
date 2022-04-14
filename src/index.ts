import logger from '@fnd/external_interfaces/logger';

const Logger = logger(__filename);

const main = async () => {
    try {
        await createDBConnection();
        await dbInit();
        await startWebApp();
    } catch (err: unknown) {
        if (err instanceof Error)
            Logger.error(`ERROR : ${err.message} STACK : ${err.stack}`);
    }
};

const createDBConnection = async () => {
    const { sequelizeConnection } = await import(
        '@fnd/storage/sql/client/client'
    );
    await sequelizeConnection.authenticate();
};

const dbInit = async () => {
    const { dbInit } = await import('@fnd/storage/sql/client/init');
    dbInit();
};

const startWebApp = async () => {
    const { Server } = await import('@fnd/web/server');
    const server = new Server();
    server.start();
};

main();
