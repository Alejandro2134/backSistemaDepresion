import { Router } from 'express';
import { router as healthyRouter } from './healthy';

const routes = Router();

routes.use('/', healthyRouter);

export { routes };
