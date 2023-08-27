import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SupplierController } from './supplier.controller';
import { SupplierValidation } from './supplier.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-supplier',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(SupplierValidation.create),
  SupplierController.insertIntoDB
);
router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  SupplierController.getAllFromDB
);
router.get(
  '/supplier/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  SupplierController.getDataById
);
router.patch(
  '/:id',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(SupplierValidation.update),
  SupplierController.updateIntoDB
);
export const SupplierRoutes = router;
