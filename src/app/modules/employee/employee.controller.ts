import { Employee } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { employeeFilterableFields } from './employee.constrant';
import { EmployeeService } from './employee.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await EmployeeService.inertIntoDB(req.body);
  sendResponse<Employee>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const filters = pick(req.query, employeeFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await EmployeeService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await EmployeeService.getDataById(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { mobileNo } = req.params;
  const payload = req.body;
  const result = await EmployeeService.updateIntoDB(mobileNo, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee Updated Successfully',
    data: result,
  });
});
export const EmployeeController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
