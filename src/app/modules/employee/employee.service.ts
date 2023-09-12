/* eslint-disable @typescript-eslint/no-explicit-any */

import { Employee } from '@prisma/client';
import prisma from '../../../shared/prisma';
const getDataById = async (mobileNo: string): Promise<Employee | null> => {
  const result = await prisma.employee.findUnique({
    where: {
      mobileNo: mobileNo,
    },
  });
  return result;
};
const updateIntoDB = async (
  mobileNo: string,
  payload: Partial<Employee>
): Promise<Employee> => {
  const result = await prisma.employee.update({
    where: {
      mobileNo: mobileNo,
    },
    data: payload,
  });
  return result;
};
export const EmployeeService = {
  getDataById,
  updateIntoDB,
};
