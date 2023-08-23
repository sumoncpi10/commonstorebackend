import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BrandController } from './brand.controller';
import { BrandValidation } from './brand.validation';

const router = express.Router();
router.post(
  '/create-brand',
  validateRequest(BrandValidation.create),
  BrandController.insertIntoDB
);
router.get('/', BrandController.getAllFromDB);
router.get('/:id', BrandController.getDataById);

export const BrandRoutes = router;
