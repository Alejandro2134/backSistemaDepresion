import logger from '@fnd/external_interfaces/logger';

const Logger = logger(__filename);

const main = async () => {
    try {
        await createDBConnection();
        await startWebApp();
    } catch (err: unknown) {
        if (err instanceof Error)
            Logger.error(`ERROR : ${err.message} STACK : ${err.stack}`);
    }
};

const createDBConnection = async () => {
    const { testDb } = await import('@fnd/storage/postgresql/client/client');
    await testDb();
};

const startWebApp = async () => {
    const { Server } = await import('@fnd/web/server');
    const server = new Server();
    server.start();
};

main();
