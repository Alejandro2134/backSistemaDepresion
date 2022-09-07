import { Router } from 'express';

import { router as userRouter } from './user/user_routes';
import { router as questionRouter } from './question/question_routes';
import { router as symptomRouter } from './symptom/symptom_routes';
import { router as depresionTypeRouter } from './depresion_type/depresion_type_routes';

const router = Router();

router.use('/users', userRouter);
router.use('/questions', questionRouter);
router.use('/symptoms', symptomRouter);
router.use('/depresion-type', depresionTypeRouter);

export { router };
