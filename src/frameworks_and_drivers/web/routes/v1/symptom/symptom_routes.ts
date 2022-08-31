import { Router } from 'express';
import { SymptomController } from '@symptoms/interface_adapters/web/symptom_controller';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new SymptomController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);

export { router };