import logger from '@fnd/external_interfaces/logger';

const Logger = logger(__filename);

const main = async () => {
    try {
        createDBConnection();
        await startWebApp();
    } catch (err: unknown) {
        if (err instanceof Error)
            Logger.error(`ERROR : ${err.message} STACK : ${err.stack}`);
    }
};

const createDBConnection = () => {
    console.log('connection');
}

const startWebApp = async () => {
    const { Server } = await import('@fnd/web/server');
    const server = new Server();
    server.start();
};

main();
