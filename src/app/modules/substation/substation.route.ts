import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { SubstationController } from './substation.controller';
import { SubstationValidation } from './substation.validation';

const router = express.Router();
router.post(
  '/create-substation',
  validateRequest(SubstationValidation.create),
  SubstationController.insertIntoDB
);
router.get('/:pbsCode', SubstationController.getAllFromDB);
router.get('/substation/:substationCode', SubstationController.getDataById);
router.patch(
  '/:substationCode',
  validateRequest(SubstationValidation.update),
  SubstationController.updateIntoDB
);
export const SubstationRoutes = router;
