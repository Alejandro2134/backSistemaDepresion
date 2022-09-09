import { DictionaryController } from '@dictionary/interface_adapters/web/dictionary_controller';
import { Router } from 'express';
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';
import filter from '@fnd/web/middlewares/validators/build_filters/dictionary/dictionary_filter';

const controller = new DictionaryController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);
router.get('/get-all', checkPermissions(false), filter, controller.getAll);
router.delete('/:id/delete-one', checkPermissions(true), controller.deleteOne);
router.put('/:id/update-one', checkPermissions(true), controller.updateOne);

export { router };
