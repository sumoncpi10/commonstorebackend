/* eslint-disable @typescript-eslint/no-explicit-any */

import { ComplainCenter, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { complainSearchableFields } from './complain.constrant';
import { complainFilterRequest } from './complain.interface';

const inertIntoDB = async (data: ComplainCenter): Promise<ComplainCenter> => {
  const result = prisma.complainCenter.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: complainFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<ComplainCenter[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: complainSearchableFields.map(field => ({
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

  const whereCondition: Prisma.ComplainCenterWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.complainCenter.findMany({
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
    },
    skip,
    take: limit,
    include: { pbs: true, zonals: true },
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.complainCenter.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (
  complainCode: string
): Promise<ComplainCenter | null> => {
  const result = await prisma.complainCenter.findUnique({
    where: {
      complainCode: complainCode,
    },
  });
  return result;
};

export const ComplainService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
};
