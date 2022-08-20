import { QuestionController } from "@questions/interface_adapters/web/question_controller";
import { Router } from "express";
import checkPermissions from '@fnd/web/middlewares/auth/check_permissions';

const controller = new QuestionController();

const router = Router();

router.post('/create-one', checkPermissions(true), controller.createOne);

export { router };