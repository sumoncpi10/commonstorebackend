import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { RevenueItemController } from './revenueitem.controller';
import { RevenueItemValidation } from './revenueitem.validation';

const router = express.Router();
router.post(
  '/create-revenue-item',
  validateRequest(RevenueItemValidation.create),
  RevenueItemController.insertIntoDB
);
router.get('/', RevenueItemController.getAllFromDB);
router.get('/:id', RevenueItemController.getDataById);

export const RevenueRoutes = router;
