import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DepartmentController } from './department.controller';
import { DepartmentValidation } from './department.validation';

const router = express.Router();
router.post(
  '/create-department',
  validateRequest(DepartmentValidation.create),
  DepartmentController.insertIntoDB
);
router.get('/', DepartmentController.getAllFromDB);
router.get('/:id', DepartmentController.getDataById);

export const DepartmentRoutes = router;
