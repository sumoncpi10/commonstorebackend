import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SupplierController } from './supplier.controller';
import { SupplierValidation } from './supplier.validation';
const router = express.Router();
router.post(
  '/create-supplier',
  validateRequest(SupplierValidation.create),
  SupplierController.insertIntoDB
);
router.get('/', SupplierController.getAllFromDB);
router.get('/:id', SupplierController.getDataById);

export const SupplierRoutes = router;
