import { z } from 'zod';

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name  is required',
    }),
    serialNo: z.string({
      required_error: 'serialNo  is required',
    }),
    description: z.string({
      required_error: 'description is required',
    }),
    purchasedate: z.string({
      required_error: 'purchasedate is required',
    }),
    price: z.string({
      required_error: 'price is required',
    }),
    warranty: z.string({
      required_error: 'warranty is required',
    }),
    identificationNo: z.string({
      required_error: 'identificationNo is required',
    }),
    status: z.string({
      required_error: 'status is required',
    }),
  }),
});

export const CapitalItemValidation = {
  create,
};
