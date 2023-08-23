import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ZonalController } from './substation.controller';
import { ZonalValidation } from './substation.validation';

const router = express.Router();
router.post(
  '/create-zonal',
  validateRequest(ZonalValidation.create),
  ZonalController.insertIntoDB
);
router.get('/', ZonalController.getAllFromDB);
router.get('/:id', ZonalController.getDataById);

export const ZonalRoutes = router;
