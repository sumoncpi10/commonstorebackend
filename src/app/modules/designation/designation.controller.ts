import { Designation } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { designationFilterableFields } from './designation.constrant';
import { DesignationService } from './designation.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await DesignationService.inertIntoDB(req.body);
  sendResponse<Designation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Designation Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, designationFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await DesignationService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Designation data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await DesignationService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Designation data fatched',
    data: result,
  });
});

export const DesignationController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
