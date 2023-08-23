import { ItemType } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { itemTypeFilterableFields } from './item.type.constrant';
import { ItemTypeService } from './item.type.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await ItemTypeService.inertIntoDB(req.body);
  sendResponse<ItemType>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ItemType Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, itemTypeFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await ItemTypeService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ItemType data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ItemTypeService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'ItemType data fatched',
    data: result,
  });
});

export const ItemTypeController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
