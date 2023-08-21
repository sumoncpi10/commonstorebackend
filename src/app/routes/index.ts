import express from 'express';
import { PbsRoutes } from '../modules/pbs/pbs.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/pbs',
    route: PbsRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
