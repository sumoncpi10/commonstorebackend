import { Survicing } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { survicingFilterableFields } from './survicing.constrant';
import { SurvicingService } from './survicing.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await SurvicingService.inertIntoDB(req.body);
  sendResponse<Survicing>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Survicing Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, survicingFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await SurvicingService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Survicing data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await SurvicingService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Survicing data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await SurvicingService.updateIntoDB(id, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Survicing Updated Successfully',
    data: result,
  });
});
export const SurvicingController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
