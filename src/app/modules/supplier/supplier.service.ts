/* eslint-disable @typescript-eslint/no-explicit-any */

import { Prisma, Supplier } from '@prisma/client';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import prisma from '../../../shared/prisma';
import { supplierSearchableFields } from './supplier.constrant';
import { supplierFilterRequest } from './supplier.interface';

const inertIntoDB = async (data: Supplier): Promise<Supplier> => {
  const result = prisma.supplier.create({
    data: data,
  });
  return result;
};
// get all supplier
const getAllFromDB = async (
  filters: supplierFilterRequest,
  options: IPaginationOptions
): Promise<IGenericResponse<Supplier[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars
  console.log(options);
  const { searchTerm, ...filtersData } = filters;
  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      OR: supplierSearchableFields.map(field => ({
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

  const whereCondition: Prisma.SupplierWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};
  const result = await prisma.supplier.findMany({
    where: whereCondition,
    skip,
    take: limit,
    include: {
      pbs: true,
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
  const total = await prisma.supplier.count();
  return {
    meta: {
      total,
      page,
      limit,
    },
    data: result,
  };
};

const getDataById = async (id: string): Promise<Supplier | null> => {
  const result = await prisma.supplier.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

const deleteById = async (id: string): Promise<Supplier | null> => {
  const result = await prisma.supplier.findUnique({
    where: {
      id: id,
    },
  });
  return result;
};

export const SupplierService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
  deleteById,
};
