/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import config from '../../../config';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { userSearchableFields } from './user.constrant';
import { userFilterRequest } from './user.interface';
const inertIntoDB = async (data: User): Promise<User> => {
  data.password = await bcrypt.hash(
    data.password,
    Number(config.bycrypt_salt_rounds)
  );
  const result = prisma.user.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: userFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<User[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: userSearchableFields.map(field => ({
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

  const whereCondition: Prisma.UserWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.user.findMany({
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
    },
    skip,
    take: limit,
    include: {
      pbs: true,
      zonals: true,
      complainCenter: true,
      substation: true,
      employee: true,
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
  const total = await prisma.user.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (mobileNo: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      mobileNo: mobileNo,
    },
  });
  return result;
};
const updateIntoDB = async (
  mobileNo: string,
  payload: Partial<User>
): Promise<User> => {
  const result = await prisma.user.update({
    where: {
      mobileNo: mobileNo,
    },
    data: payload,
  });
  return result;
};
export const UserService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
};
