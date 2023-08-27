import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { ItemTypeController } from './item.type.controller';
import { ItemTypeValidation } from './item.type.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-item-type',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(ItemTypeValidation.create),
  ItemTypeController.insertIntoDB
);
router.get(
  '/',
  auth(ADMIN, SUPER_ADMIN, USER),
  ItemTypeController.getAllFromDB
);
router.get(
  '/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  ItemTypeController.getDataById
);

export const ItemTypeRoutes = router;
