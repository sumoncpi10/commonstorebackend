import express from 'express';
import { ComplainRoutes } from '../modules/complain/complain.route';
import { PbsRoutes } from '../modules/pbs/pbs.routes';
import { SubstationRoutes } from '../modules/substation/substation.route';
import { ZonalRoutes } from '../modules/zonal/zonal.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/pbs',
    route: PbsRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
  {
    path: '/complain',
    route: ComplainRoutes,
  },
  {
    path: '/substation',
    route: SubstationRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
