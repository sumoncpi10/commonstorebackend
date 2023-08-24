import { Department } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { departmentFilterableFields } from './department.constrant';
import { DepartmentService } from './department.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await DepartmentService.inertIntoDB(req.body);
  sendResponse<Department>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, departmentFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await DepartmentService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await DepartmentService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Department data fatched',
    data: result,
  });
});

export const DepartmentController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
};
