import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BrandController } from './brand.controller';
import { BrandValidation } from './brand.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-brand',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(BrandValidation.create),
  BrandController.insertIntoDB
);
router.get('/', auth(ADMIN, SUPER_ADMIN, USER), BrandController.getAllFromDB);
router.get('/:id', auth(ADMIN, SUPER_ADMIN, USER), BrandController.getDataById);

export const BrandRoutes = router;
