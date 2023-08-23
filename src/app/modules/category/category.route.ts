import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validation';

const router = express.Router();
router.post(
  '/create-category',
  validateRequest(CategoryValidation.create),
  CategoryController.insertIntoDB
);
router.get('/', CategoryController.getAllFromDB);
router.get('/:id', CategoryController.getDataById);

export const CategoryRoutes = router;
