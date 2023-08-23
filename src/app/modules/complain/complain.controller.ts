import { ComplainCenter } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { complainFilterableFields } from './complain.constrant';
import { ComplainService } from './complain.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await ComplainService.inertIntoDB(req.body);
  sendResponse<ComplainCenter>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'complain center Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, complainFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await ComplainService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'complain center data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ComplainService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'complain data fatched',
    data: result,
  });
});

export const ComplainController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
