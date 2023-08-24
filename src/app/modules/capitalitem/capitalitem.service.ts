/* eslint-disable @typescript-eslint/no-explicit-any */

import { CapitalItem, Prisma } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { capitalItemSearchableFields } from './capitalitem.constrant';
import { capitalItemFilterRequest } from './capitalitem.interface';

const inertIntoDB = async (data: CapitalItem): Promise<CapitalItem> => {
  const result = prisma.capitalItem.create({
    data: data,
  });
  return result;
};

const getAllFromDB = async (
  filters: capitalItemFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  console.log(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: capitalItemSearchableFields.map(field => ({
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

  const whereCondition: Prisma.CapitalItemWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.capitalItem.findMany({
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
  const total = await prisma.capitalItem.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<CapitalItem | null> => {
  const result = await prisma.capitalItem.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const CapitalItemService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
};
