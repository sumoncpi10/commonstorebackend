import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EmployeeController } from './employee.controller';
import { EmployeeValidation } from './employee.validation';

const router = express.Router();
router.post(
  '/create-employee',
  validateRequest(EmployeeValidation.create),
  EmployeeController.insertIntoDB
);
router.get('/', EmployeeController.getAllFromDB);
router.get('/:id', EmployeeController.getDataById);

export const EmployeeRoutes = router;
