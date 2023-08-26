import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = express.Router();
router.post(
  '/create-user',
  validateRequest(UserValidation.create),
  UserController.insertIntoDB
);
router.get('/:pbsCode', UserController.getAllFromDB);
router.get('/user/:mobileNo', UserController.getDataById);

export const UserRoutes = router;
