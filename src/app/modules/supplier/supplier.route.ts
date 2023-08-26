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
router.get('/:pbsCode', SupplierController.getAllFromDB);
router.get('/supplier/:id', SupplierController.getDataById);
router.patch(
  '/:id',
  validateRequest(SupplierValidation.update),
  SupplierController.updateIntoDB
);
export const SupplierRoutes = router;
