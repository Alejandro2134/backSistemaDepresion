import { DepresionTypeController } from '@depresion_type/interface_adapters/web/depresion_type_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new DepresionTypeController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);

export { router };
