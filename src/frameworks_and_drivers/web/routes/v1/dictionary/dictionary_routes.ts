import { DictionaryController } from '@dictionary/interface_adapters/web/dictionary_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new DictionaryController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);

export { router };
