import { QuestionController } from "@questions/interface_adapters/web/question_controller";
import { Router } from "express";
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';
import filter from "@fnd/web/middlewares/validators/build_filters/question/question_filter";

const controller = new QuestionController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);
router.get('/get-all', checkPermissions(false), filter, controller.getAll);
router.delete('/:id/delete-one', checkPermissions(true), controller.deleteOne);

export { router };