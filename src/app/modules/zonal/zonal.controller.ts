import { Zonals } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { zonalFilterableFields } from './zonal.constrant';
import { ZonalService } from './zonal.service';

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
  const pbsCode = req.params.pbsCode;
  const filters = pick(req.query, zonalFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await ZonalService.getAllFromDB(filters, options, pbsCode);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'zonal data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const zonalCode = req.params.zonalCode;
  const result = await ZonalService.getDataById(zonalCode);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'zonal data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { zonalCode } = req.params;
  const payload = req.body;
  const result = await ZonalService.updateIntoDB(zonalCode, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Zonal Updated Successfully',
    data: result,
  });
});
export const ZonalController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
