import { SubCategory } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { subCategoryFilterableFields } from './subcategory.constrant';
import { SubCategoryService } from './subcategory.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await SubCategoryService.inertIntoDB(req.body);
  sendResponse<SubCategory>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SubCategory Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, subCategoryFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await SubCategoryService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SubCategory data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await SubCategoryService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SubCategory data fatched',
    data: result,
  });
});

export const SubCategoryController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
