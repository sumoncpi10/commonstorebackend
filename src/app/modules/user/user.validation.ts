import { z } from 'zod';

const create = z.object({
  body: z.object({
    mobileNo: z.string({
      required_error: 'mobileNo code is required',
    }),
    password: z.string({
      required_error: 'password name is required',
    }),
    pbsCode: z.string({
      required_error: 'pbsCode code is required',
    }),
    zonalCode: z.string({
      required_error: 'zonalCode code is required',
    }),
    substationCode: z.string().optional(),
    complainCode: z.string().optional(),
  }),
});

export const UserValidation = {
  create,
};
