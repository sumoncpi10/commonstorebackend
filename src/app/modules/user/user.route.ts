import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
router.post(
  '/create-user',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);
router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  UserController.getAllFromDB
);
router.get(
  '/user/:mobileNo',
  auth(ADMIN, SUPER_ADMIN, USER),
  UserController.getDataById
);
router.patch(
  '/:mobileNo',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateIntoDB
);

export const UserRoutes = router;
