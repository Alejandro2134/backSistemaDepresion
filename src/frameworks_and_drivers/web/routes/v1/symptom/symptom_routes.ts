import { Router } from 'express';
import { SymptomController } from '@symptoms/interface_adapters/web/symptom_controller';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';
import filter from '@fnd/web/middlewares/validators/build_filters/symptom/symptom_filter';

const controller = new SymptomController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);
router.get('/get-all', checkPermissions(false), filter, controller.getAll);

export { router };