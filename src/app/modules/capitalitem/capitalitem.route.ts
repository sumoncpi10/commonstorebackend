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
router.get('/', CapitalItemController.getAllFromDB);
router.get('/:id', CapitalItemController.getDataById);

export const CapitalItemRoutes = router;
