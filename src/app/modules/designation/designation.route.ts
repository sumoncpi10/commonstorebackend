import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { DesignationController } from './designation.controller';
import { DesignationValidation } from './designation.validation';

const router = express.Router();
router.post(
  '/create-designation',
  validateRequest(DesignationValidation.create),
  DesignationController.insertIntoDB
);
router.get('/', DesignationController.getAllFromDB);
router.get('/:id', DesignationController.getDataById);

export const DesignationRoutes = router;
