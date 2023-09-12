import { User } from '@prisma/client';
import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { userFilterableFields } from './user.constrant';
import { UserService } from './user.service';

const insertIntoDB: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.inertIntoDB(req.body);
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req, res) => {
  const pbsCode = req.params.pbsCode;
  const filters = pick(req.query, userFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await UserService.getAllFromDB(filters, options, pbsCode);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fatched',
    meta: result.meta,
    data: result.data,
  });
});

const getDataById = catchAsync(async (req, res) => {
  const mobileNo = req.params.mobileNo;
  const result = await UserService.getDataById(mobileNo);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User data fatched',
    data: result,
  });
});
const updateIntoDB = catchAsync(async (req, res) => {
  const { mobileNo } = req.params;
  const payload = req.body;
  const result = await UserService.updateIntoDB(mobileNo, payload);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Updated Successfully',
    data: result,
  });
});

const employeePostingZonal: RequestHandler = catchAsync(async (req, res) => {
  const employeeMobileNo = req.body.mobileNo;
  const employeeZonalCode = req.body.zonalCode;
  const result = await UserService.employeePostingZonal(
    employeeMobileNo,
    employeeZonalCode
  );
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Employee Posting Successfully',
    data: result,
  });
});
const pbsPostingRequest: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.pbsPostingRequest(req.user, req.body);
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PBS Transfer Request Successfully',
    data: result,
  });
});
const getAllPbsTransferRequestedUser = catchAsync(async (req, res) => {
  const pbsCode = req.params.pbsCode;
  const filters = pick(req.query, userFilterableFields);
  const options = pick(req.query, ['limit', 'page', 'sortBy', 'sortOrder']);

  const result = await UserService.getAllPbsTransferRequestedUser(
    filters,
    options,
    pbsCode
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Transfer Requested data fatched',
    meta: result.meta,
    data: result.data,
  });
});
const pbsPostingRequestApprove: RequestHandler = catchAsync(
  async (req, res) => {
    const result = await UserService.pbsPostingRequestApprove(
      req.user,
      req.body
    );
    sendResponse<User>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'PBS Transfer Request Approve Successfully',
      data: result,
    });
  }
);
const pbsPostingRequestCalcel: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.pbsPostingRequestCancel(req.user, req.body);
  sendResponse<User>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'PBS Transfer Request Cancel Successfully',
    data: result,
  });
});
export const UserController = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
  employeePostingZonal,
  pbsPostingRequest,
  pbsPostingRequestApprove,
  pbsPostingRequestCalcel,
  getAllPbsTransferRequestedUser,
};
