import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { EmployeeController } from './employee.controller';
import { EmployeeValidation } from './employee.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.get(
  '/:mobileNo',
  auth(ADMIN, SUPER_ADMIN, USER),
  EmployeeController.getDataById
);
router.patch(
  '/:mobileNo',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(EmployeeValidation.update),
  EmployeeController.updateIntoDB
);

export const EmployeeRoutes = router;
