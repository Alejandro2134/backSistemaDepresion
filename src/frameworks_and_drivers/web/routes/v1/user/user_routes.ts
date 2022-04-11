import { Router } from 'express';
import { UserController } from '@users/interface_adapters/web/controllers/user/user_controller';

const controller = new UserController();

const router = Router();

router.post('/create-one', controller.createOne);
router.delete('/:id/delete-one', controller.deleteOne);
router.put('/:id/update-one', controller.updateOne);

export { router };
