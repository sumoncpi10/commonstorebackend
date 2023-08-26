import { z } from 'zod';

const create = z.object({
  body: z.object({
    serialNo: z.string().optional(),
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
    identificationNo: z.string().optional(),
    status: z.string({
      required_error: 'status is required',
    }),
  }),
});
const update = z.object({
  body: z.object({
    serialNo: z.string().optional(),
    description: z.string().optional(),
    purchasedate: z.string().optional(),
    price: z.string().optional(),
    warranty: z.string().optional(),
    identificationNo: z.string().optional(),
    status: z.string().optional(),
  }),
});
export const RevenueItemValidation = {
  create,
  update,
};
