import { Router } from 'express';

import { router as userRouter } from './user/user_routes';
import { router as questionRouter } from './question/question_routes';
import { router as symptomRouter } from './symptom/symptom_routes';
import { router as depresionTypeRouter } from './depresion_type/depresion_type_routes';
import { router as dictionaryRouter } from './dictionary/dictionary_routes';
import { router as inferenceMotorRouter } from './inference_motor/inference_motor_routes';
import { router as diagnosisRouter } from './diagnosis/diagnosis_routes';

const router = Router();

router.use('/users', userRouter);
router.use('/questions', questionRouter);
router.use('/symptoms', symptomRouter);
router.use('/depresion-type', depresionTypeRouter);
router.use('/dictionary', dictionaryRouter);
router.use('/inference-motor', inferenceMotorRouter);
router.use('/diagnosis', diagnosisRouter);

export { router };
