import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ModelController } from './model.controller';
import { ModelValidation } from './model.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-model',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ModelValidation.create),
  ModelController.insertIntoDB
);
router.get('/', auth(ADMIN, SUPER_ADMIN, USER), ModelController.getAllFromDB);
router.get('/:id', auth(ADMIN, SUPER_ADMIN, USER), ModelController.getDataById);

export const ModelRoutes = router;
