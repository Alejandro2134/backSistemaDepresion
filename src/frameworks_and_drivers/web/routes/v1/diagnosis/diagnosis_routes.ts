import { DiagnosisController } from '@diagnosis/interface_adapters/web/diagnosis_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';
import filter from '@fnd/web/middlewares/validators/build_filters/diagnosis/diagnosis_filter';

const controller = new DiagnosisController();

const router = Router();

router.post('/create-one', checkPermissions(false), controller.createOne);
router.get('/get-all', checkPermissions(false), filter, controller.getAll);

export { router };
