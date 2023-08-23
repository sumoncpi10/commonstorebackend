import { z } from 'zod';

const create = z.object({
  body: z.object({
    categoryName: z.string({
      required_error: 'zonal code is required',
    }),
    itemTypeId: z.string({
      required_error: 'zonal name is required',
    }),
  }),
});

export const CategoryValidation = {
  create,
};
