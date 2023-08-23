/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, Zonals } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { zonalSearchableFields } from './substation.constrant';
import { zonalFilterRequest } from './substation.interface';

const inertIntoDB = async (zonalData: Zonals): Promise<Zonals> => {
  const result = prisma.zonals.create({
    data: zonalData,
  });
  return result;
};

const getAllFromDB = async (
  filters: zonalFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Zonals[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  console.log(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: zonalSearchableFields.map(field => ({
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

  const whereCondition: Prisma.ZonalsWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.zonals.findMany({
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
  const total = await prisma.zonals.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Zonals | null> => {
  const result = await prisma.zonals.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const ZonalService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
};
