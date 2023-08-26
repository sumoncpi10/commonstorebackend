/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, Substation } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { substationSearchableFields } from './substation.constrant';
import { substationFilterRequest } from './substation.interface';

const inertIntoDB = async (data: Substation): Promise<Substation> => {
  const result = prisma.substation.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: substationFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<Substation[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: substationSearchableFields.map(field => ({
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

  const whereCondition: Prisma.SubstationWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.substation.findMany({
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
  const total = await prisma.substation.count();
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
  substationCode: string
): Promise<Substation | null> => {
  const result = await prisma.substation.findUnique({
    where: {
      substationCode: substationCode,
    },
  });
  return result;
};

export const SubstationService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
};
