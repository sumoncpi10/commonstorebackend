import { z } from 'zod';
const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name code is required',
    }),
    designation: z.string({
      required_error: 'designation name is required',
    }),
    phone: z.string({
      required_error: 'phone code is required',
    }),
    address: z.string({
      required_error: 'address code is required',
    }),
    trgId: z.string({
      required_error: 'trgId name is required',
    }),
    photoUrl: z.string({
      required_error: 'photoUrl code is required',
    }),
    signUrl: z.string({
      required_error: 'signUrl name is required',
    }),
    mobileNo: z.string({
      required_error: 'mobileNo code is required',
    }),
  }),
});
const update = z.object({
  body: z.object({
    name: z.string().optional(),
    designation: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
    trgId: z.string().optional(),
    photoUrl: z.string().optional(),
    signUrl: z.string().optional(),
    mobileNo: z.string().optional(),
  }),
});

export const EmployeeValidation = {
  create,
  update,
};
