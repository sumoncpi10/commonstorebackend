import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { PbsController } from './pbs.controller';
import { PbsValidation } from './pbs.validation';

const router = express.Router();
router.post(
  '/create-pbs',
  validateRequest(PbsValidation.create),
  PbsController.insertIntoDB
);
router.get('/', PbsController.getAllFromDB);
router.get('/:id', PbsController.getDataById);
export const PbsRoutes = router;
