import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { CapitalItemController } from './capitalitem.controller';
import { CapitalItemValidation } from './capitalitem.validation';
const { SUPER_ADMIN, ADMIN, USER } = ENUM_USER_ROLE;
const router = express.Router();
router.post(
  '/create-capital-item',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(CapitalItemValidation.create),
  CapitalItemController.insertIntoDB
);

router.get(
  '/:pbsCode',
  auth(ADMIN, SUPER_ADMIN, USER),
  CapitalItemController.getAllFromDB
);
router.get(
  '/capital/:id',
  auth(ADMIN, SUPER_ADMIN, USER),
  CapitalItemController.getDataById
);
router.patch(
  '/:id',
  auth(ADMIN, SUPER_ADMIN),
  validateRequest(CapitalItemValidation.update),
  CapitalItemController.updateIntoDB
);

// today api
router.post(
  '/assign-capital-item/:id',
  auth(ADMIN, SUPER_ADMIN),
  CapitalItemController.insertAssignToDB
);
router.get(
  '/not-assign/:pbsCode',
  auth(ADMIN, SUPER_ADMIN),
  CapitalItemController.getAllNotAssignFromDB
);
router.post(
  '/approve-capital-item/:id',
  auth(ADMIN, SUPER_ADMIN),
  CapitalItemController.insertApproveToDB
);
router.get(
  '/not-approve/:pbsCode',
  auth(ADMIN, SUPER_ADMIN),
  CapitalItemController.getAllNotApproveFromDB
);
export const CapitalItemRoutes = router;
