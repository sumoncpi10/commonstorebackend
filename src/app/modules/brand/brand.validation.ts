import { z } from 'zod';

const create = z.object({
  body: z.object({
    brandName: z.string({
      required_error: 'Brand name code is required',
    }),
  }),
});

export const BrandValidation = {
  create,
};
