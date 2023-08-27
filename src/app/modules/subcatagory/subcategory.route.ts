import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SubCategoryController } from './subcategory.controller';
import { SubCategoryValidation } from './subcategory.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-sub-category',
  auth(ADMIN, SUPER_ADMIN, USER),
  validateRequest(SubCategoryValidation.create),
  SubCategoryController.insertIntoDB
);
router.get('/', auth(ADMIN, SUPER_ADMIN), SubCategoryController.getAllFromDB);
router.get('/:id', auth(ADMIN, SUPER_ADMIN), SubCategoryController.getDataById);

export const SubCategoryRoutes = router;
