import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { DesignationController } from './designation.controller';
import { DesignationValidation } from './designation.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-designation',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(DesignationValidation.create),
  DesignationController.insertIntoDB
);
router.get(
  '/',
  auth(ADMIN, SUPER_ADMIN, USER),
  DesignationController.getAllFromDB
);
router.get(
  '/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  DesignationController.getDataById
);

export const DesignationRoutes = router;
