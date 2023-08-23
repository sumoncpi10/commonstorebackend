import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ModelController } from './model.controller';
import { ModelValidation } from './model.validation';

const router = express.Router();
router.post(
  '/create-model',
  validateRequest(ModelValidation.create),
  ModelController.insertIntoDB
);
router.get('/', ModelController.getAllFromDB);
router.get('/:id', ModelController.getDataById);

export const ModelRoutes = router;
