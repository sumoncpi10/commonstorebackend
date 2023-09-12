import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { SurvicingController } from './survicing.controller';
import { SurvicingValidation } from './survicing.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-survicing',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(SurvicingValidation.create),
  SurvicingController.insertIntoDB
);
router.get(
  '/',
  auth(ADMIN, SUPER_ADMIN, USER),
  SurvicingController.getAllFromDB
);
router.get(
  '/survicing/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  SurvicingController.getDataById
);
router.patch(
  '/:id',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(SurvicingValidation.update),
  SurvicingController.updateIntoDB
);
export const SurvicingRoutes = router;
