import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SubCategoryController } from './subcategory.controller';
import { SubCategoryValidation } from './subcategory.validation';

const router = express.Router();
router.post(
  '/create-sub-category',
  validateRequest(SubCategoryValidation.create),
  SubCategoryController.insertIntoDB
);
router.get('/', SubCategoryController.getAllFromDB);
router.get('/:id', SubCategoryController.getDataById);

export const SubCategoryRoutes = router;
