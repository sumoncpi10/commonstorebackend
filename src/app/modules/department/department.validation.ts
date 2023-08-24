import { z } from 'zod';

const create = z.object({
  body: z.object({
    departmentName: z.string({
      required_error: 'department Name is required',
    }),
  }),
});

export const DepartmentValidation = {
  create,
};
