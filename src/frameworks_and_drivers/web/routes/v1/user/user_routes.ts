import { Router } from 'express';
import { UserController } from '@users/interface_adapters/web/controllers/user/user_controller';

const controller = new UserController();

const router = Router();

router.post('/create-one', controller.createOne);
router.delete('/:id/delete-one', controller.deleteOne);
router.put('/:email/update-one', controller.updateOne);
router.get('/get-all', controller.getAll);
router.post('/login', controller.login);

export { router };
