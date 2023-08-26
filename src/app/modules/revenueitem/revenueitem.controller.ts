import { RevenueItem } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { RevenueItemFilterableFields } from './revenueitem.constrant';
import { RevenueItemService } from './revenueitem.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await RevenueItemService.inertIntoDB(req.body);
  sendResponse<RevenueItem>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'RevenueItem Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, RevenueItemFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await RevenueItemService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'RevenueItem data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await RevenueItemService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'RevenueItem data fatched',
    data: result,
  });
});

export const RevenueItemController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
