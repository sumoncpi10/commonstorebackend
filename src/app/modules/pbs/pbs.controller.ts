import { PBS } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { pbsFilterableFields } from './pbs.constrant';
import { PbsService } from './pbs.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await PbsService.inertIntoDB(req.body);
  sendResponse<PBS>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PBS Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, pbsFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await PbsService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PBS data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await PbsService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PBS data fatched',
    data: result,
  });
});

const singleDeleteFromDB = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await PbsService.singleDeleteFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Deleted Successfully',
    data: result,
  });
});

export const PbsController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  singleDeleteFromDB,
};
