import { Router } from 'express';
import { router as v1Router } from './v1/index';
import { router as healthyRouter } from './healthy';

const routes = Router();

routes.use('/v1', v1Router);
routes.use('/', healthyRouter);

export { routes };
