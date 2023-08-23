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

export const SupplierValidation = {
  create,
};
