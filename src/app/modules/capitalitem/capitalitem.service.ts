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
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

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
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
    },
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
const getAllNotAssignFromDB = async (
  filters: capitalItemFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

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
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
      assignToMobileNo: null,
    },
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
const getAllNotApproveFromDB = async (
  filters: capitalItemFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

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
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
      approveByMobileNo: null,
    },
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
const getAllNotCertifyFromDB = async (
  filters: capitalItemFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

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
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
      certifiedByMobileNo: null,
    },
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

const getAllNotReveiveFromDB = async (
  filters: capitalItemFilterRequest,
  options: IPaginationOptions,
  pbsCode: string
): Promise<IGenericResponse<CapitalItem[]>> => {
  const { page, limit, skip } = paginationHelpers.calculatePagination(options);
  // eslint-disable-next-line no-unused-vars

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
    where: {
      ...whereCondition,
      pbsCode: pbsCode,
      receivedByMobileNo: null,
    },
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
const updateIntoDB = async (
  id: string,
  payload: Partial<CapitalItem>
): Promise<CapitalItem> => {
  const result = await prisma.capitalItem.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return result;
};

const insertAssignToDB = async (
  authUser: any,
  bodyData: any,
  id: string
): Promise<CapitalItem> => {
  // for get item code
  const capitalItemDataFromDB = await prisma.capitalItem.findFirst({
    where: {
      id: id,
    },
  });
  // for get all data from db by itemcode and pbscode and zonalCode
  const lastIdentificationNo = await prisma.capitalItem.findMany({
    where: {
      itemCode: capitalItemDataFromDB?.itemCode,
      pbsCode: authUser.pbsCode,
      zonalCode: bodyData.zonalCode,
    },
  });

  const newIdentificationNo: any = [];
  lastIdentificationNo.map(element => {
    newIdentificationNo.push(element?.identificationNo);
  });

  const newIdentificationNo2: number[] = [];
  newIdentificationNo.map((element: string) => {
    const num = parseInt(element.slice(-2));
    newIdentificationNo2.push(num);
  });
  const maxNumber: number = Math.max(...newIdentificationNo2);

  const zonalOfficeCode = bodyData.zonalCode.toString().slice(-2);

  // identification No Generate
  const identificationNo =
    authUser.pbsCode +
    '.' +
    zonalOfficeCode +
    '.' +
    capitalItemDataFromDB?.itemCode +
    '.' +
    (maxNumber < 9 ? '0' + (maxNumber + 1) : maxNumber + 1).toString();

  const result = prisma.capitalItem.update({
    where: {
      id: id,
    },
    data: {
      assignToMobileNo: bodyData.assignTo,
      issueByMobileNo: authUser.mobileNo,
      zonalCode: bodyData.zonalCode,
      identificationNo: identificationNo,
    },
  });
  return result;
};
const insertApproveToDB = async (
  AuthUserMobileNo: string,
  id: string
): Promise<CapitalItem> => {
  const result = prisma.capitalItem.update({
    where: {
      id: id,
    },
    data: {
      approveByMobileNo: AuthUserMobileNo,
    },
  });
  return result;
};
const insertCertifyToDB = async (
  AuthUserMobileNo: string,
  id: string
): Promise<CapitalItem> => {
  const result = prisma.capitalItem.update({
    where: {
      id: id,
    },
    data: {
      certifiedByMobileNo: AuthUserMobileNo,
    },
  });
  return result;
};

const insertReceiveToDB = async (
  AuthUserMobileNo: string,
  id: string
): Promise<CapitalItem> => {
  const result = prisma.capitalItem.update({
    where: {
      id: id,
    },
    data: {
      receivedByMobileNo: AuthUserMobileNo,
    },
  });
  return result;
};

export const CapitalItemService = {
  inertIntoDB,
  getAllFromDB,
  getDataById,
  updateIntoDB,
  insertAssignToDB,
  getAllNotAssignFromDB,
  insertApproveToDB,
  getAllNotApproveFromDB,
  insertCertifyToDB,
  getAllNotCertifyFromDB,
  insertReceiveToDB,
  getAllNotReveiveFromDB,
};
