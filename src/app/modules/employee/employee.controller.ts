import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { EmployeeService } from './employee.service';

const getDataById = catchAsync(async (req, res) => {
  const mobileNo = req.params.mobileNo;
  const result = await EmployeeService.getDataById(mobileNo);
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
  getDataById,
  updateIntoDB,
};
