import { Zonals } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { zonalFilterableFields } from './substation.constrant';
import { ZonalService } from './substation.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await ZonalService.inertIntoDB(req.body);
  sendResponse<Zonals>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Zonal Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, zonalFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await ZonalService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'zonal data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ZonalService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'zonal data fatched',
    data: result,
  });
});

export const ZonalController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
