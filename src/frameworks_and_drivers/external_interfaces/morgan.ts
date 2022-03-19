import morgan from 'morgan';
import unless from 'express-unless';

const morganMiddleware = () => {
    const middleware: any = morgan('common');
    middleware['unless'] = unless;
    return middleware;
};

export default morganMiddleware;
