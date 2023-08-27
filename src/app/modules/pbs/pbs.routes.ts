import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { PbsController } from './pbs.controller';
import { PbsValidation } from './pbs.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-pbs',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(PbsValidation.create),
  PbsController.insertIntoDB
);
router.delete(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN),
  PbsController.singleDeleteFromDB
);
router.get('/', auth(ADMIN, SUPER_ADMIN, USER), PbsController.getAllFromDB);
router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  PbsController.getDataById
);

export const PbsRoutes = router;
