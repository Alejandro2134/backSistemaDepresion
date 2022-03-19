const main = () => {
    startWebApp();
};

const startWebApp = async () => {
    const { Server } = await import('@fnd/web/server');
    const server = new Server();
    server.start();
};

main();
