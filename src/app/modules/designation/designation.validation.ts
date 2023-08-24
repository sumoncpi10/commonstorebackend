import { z } from 'zod';

const create = z.object({
  body: z.object({
    designationName: z.string({
      required_error: 'designationName is required',
    }),
    departmentId: z.string({
      required_error: 'departmentId is required',
    }),
  }),
});

export const DesignationValidation = {
  create,
};
