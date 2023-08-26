import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CapitalItemController } from './capitalitem.controller';
import { CapitalItemValidation } from './capitalitem.validation';

const router = express.Router();
router.post(
  '/create-capital-item',
  validateRequest(CapitalItemValidation.create),
  CapitalItemController.insertIntoDB
);
router.get('/:pbsCode', CapitalItemController.getAllFromDB);
router.get('/capital/:id', CapitalItemController.getDataById);
router.patch(
  '/:id',
  validateRequest(CapitalItemValidation.update),
  CapitalItemController.updateIntoDB
);
export const CapitalItemRoutes = router;
