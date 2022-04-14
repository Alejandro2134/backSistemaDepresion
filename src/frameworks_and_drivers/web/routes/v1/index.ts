import { Router } from 'express';

import { router as userRouter } from './user/user_routes';

const router = Router();

router.use('/users', userRouter);

export { router };
