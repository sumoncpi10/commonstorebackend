/* eslint-disable @typescript-eslint/no-explicit-any */

import { Employee, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { employeeSearchableFields } from './employee.constrant';
import { employeeFilterRequest } from './employee.interface';

const inertIntoDB = async (data: Employee): Promise<Employee> => {
  const result = prisma.employee.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: employeeFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Employee[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  console.log(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: employeeSearchableFields.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length > 0) {
    andConditions.push({
      AND: Object.keys(filtersData).map(key => ({
        [key]: {
          equals: (filtersData as any)[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.EmployeeWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.employee.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      user: true,
    },
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.employee.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Employee | null> => {
  const result = await prisma.employee.findUnique({
    where: {
      id: id,
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
  inertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
