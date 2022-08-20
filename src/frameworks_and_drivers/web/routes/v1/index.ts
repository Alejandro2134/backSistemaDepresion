import { Router } from 'express';

import { router as userRouter } from './user/user_routes';
import { router as questionRouter } from './question/question_routes';

const router = Router();

router.use('/users', userRouter);
router.use('/questions', questionRouter);

export { router };
