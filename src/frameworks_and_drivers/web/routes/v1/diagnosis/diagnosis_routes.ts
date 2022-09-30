import { DiagnosisController } from '@diagnosis/interface_adapters/web/diagnosis_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new DiagnosisController();

const router = Router();

router.post('/create-one', checkPermissions(false), controller.createOne);

export { router };
