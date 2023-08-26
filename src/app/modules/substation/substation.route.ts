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
router.get('/', SubstationController.getAllFromDB);
router.get('/:substationCode', SubstationController.getDataById);

export const SubstationRoutes = router;
