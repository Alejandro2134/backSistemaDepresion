import { Router } from 'express';
import { UserController } from '@users/interface_adapters/web/controllers/user/user_controller';

const controller = new UserController();

const router = Router();

router.post('/create-one', controller.createOne);

export { router }