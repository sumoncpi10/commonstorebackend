/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, Survicing } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { survicingSearchableFields } from './survicing.constrant';
import { survicingFilterRequest } from './survicing.interface';
const inertIntoDB = async (data: Survicing): Promise<Survicing> => {
  const result = prisma.survicing.create({
    data: data,
  });
  return result;
};
// get all supplier
const getAllFromDB = async (
  filters: survicingFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Survicing[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: survicingSearchableFields.map(field => ({
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

  const whereCondition: Prisma.SurvicingWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.survicing.findMany({
    where: {
      ...whereCondition,
    },
    skip,
    take: limit,

    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: 'desc',
          },
  });
  const total = await prisma.survicing.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Survicing | null> => {
  const result = await prisma.survicing.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteById = async (id: string): Promise<Survicing | null> => {
  const result = await prisma.survicing.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};
const updateIntoDB = async (
  id: string,
  payload: Partial<Survicing>
): Promise<Survicing> => {
  const result = await prisma.survicing.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};
export const SurvicingService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
  deleteById,
  updateIntoDB,
};
