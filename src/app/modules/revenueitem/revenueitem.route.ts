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
router.get('/:pbsCode', RevenueItemController.getAllFromDB);
router.get('/revenue/:id', RevenueItemController.getDataById);
router.patch(
  '/:id',
  validateRequest(RevenueItemValidation.update),
  RevenueItemController.updateIntoDB
);
export const RevenueRoutes = router;
