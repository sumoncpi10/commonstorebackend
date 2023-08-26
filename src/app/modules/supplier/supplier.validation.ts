import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name  is required',
    }),
    address: z.string({
      required_error: 'address  is required',
    }),
    phone: z.string({
      required_error: 'phone is required',
    }),
  }),
});
const update = z.object({
  body: z.object({
    name: z.string().optional(),
    address: z.string().optional(),
    phone: z.string().optional(),
  }),
});

export const SupplierValidation = {
  create,
  update,
};
