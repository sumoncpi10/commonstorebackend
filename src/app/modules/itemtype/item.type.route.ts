import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ItemTypeController } from './item.type.controller';
import { ItemTypeValidation } from './item.type.validation';

const router = express.Router();
router.post(
  '/create-item-type',
  validateRequest(ItemTypeValidation.create),
  ItemTypeController.insertIntoDB
);
router.get('/', ItemTypeController.getAllFromDB);
router.get('/:id', ItemTypeController.getDataById);

export const ItemTypeRoutes = router;
