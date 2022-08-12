import { Router } from 'express';
import { UserController } from '@users/interface_adapters/web/controllers/user/user_controller';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';
import filter from '@fnd/web/middlewares/validators/build_filters/user/user_filter';

const controller = new UserController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);
router.delete('/:id/delete-one', checkPermissions(true), controller.deleteOne);
router.put('/:email/update-one', controller.updateOne);
router.get('/get-all', checkPermissions(true), filter, controller.getAll);
router.post('/login', controller.login);

export { router };
