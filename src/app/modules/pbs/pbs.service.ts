/* eslint-disable @typescript-eslint/no-explicit-any */

import { PBS, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { pbsSearchableFields } from './pbs.constrant';
import { pbsFilterRequest } from './pbs.interface';

const inertIntoDB = async (pbsData: PBS): Promise<PBS> => {
  const result = prisma.pBS.create({
    data: pbsData,
  });
  return result;
};

const getAllFromDB = async (
  filters: pbsFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<PBS[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  console.log(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: pbsSearchableFields.map(field => ({
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

  const whereCondition: Prisma.PBSWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.pBS.findMany({
    where: whereCondition,
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
  const total = await prisma.pBS.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<PBS | null> => {
  const result = await prisma.pBS.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const singleDeleteFromDB = async (id: string): Promise<PBS | null> => {
  const result = await prisma.pBS.delete({
    where: {
      id: id,
    },
  });
  return result;
};
export const PbsService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
  singleDeleteFromDB,
};
