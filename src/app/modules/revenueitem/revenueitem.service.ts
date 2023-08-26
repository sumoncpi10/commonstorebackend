/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, RevenueItem } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { RevenueItemSearchableFields } from './revenueitem.constrant';
import { RevenueItemFilterRequest } from './revenueitem.interface';

const inertIntoDB = async (data: RevenueItem): Promise<RevenueItem> => {
  const result = prisma.revenueItem.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: RevenueItemFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<RevenueItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: RevenueItemSearchableFields.map(field => ({
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

  const whereCondition: Prisma.RevenueItemWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.revenueItem.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      model: true,
      brand: true,
      pbs: true,
      zonals: true,
      complainCenter: true,
      substation: true,
      itemType: true,
      category: true,
      subCategory: true,
      supplier: true,
      issueBy: true,
      addBy: true,
      approveBy: true,
      assignTo: true,
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
  const total = await prisma.revenueItem.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<RevenueItem | null> => {
  const result = await prisma.revenueItem.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const RevenueItemService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
};
