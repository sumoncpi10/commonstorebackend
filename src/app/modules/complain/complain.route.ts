import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ComplainController } from './complain.controller';
import { ComplainValidation } from './complain.validation';

const router = express.Router();
router.post(
  '/create-complain',
  validateRequest(ComplainValidation.create),
  ComplainController.insertIntoDB
);
router.get('/:pbsCode', ComplainController.getAllFromDB);
router.get('complain/:complainCode', ComplainController.getDataById);

export const ComplainRoutes = router;
