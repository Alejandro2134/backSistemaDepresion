import { InferenceMotorController } from '@inference_motor/interface_adapters/web/inference_motor_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new InferenceMotorController();

const router = Router();

router.post(
    '/run-diagnosis',
    checkPermissions(false),
    controller.inferenceMotor
);

export { router };
