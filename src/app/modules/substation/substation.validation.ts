import { z } from 'zod';

const create = z.object({
  body: z.object({
    substationCode: z.string({
      required_error: 'zonal code is required',
    }),
    substationName: z.string({
      required_error: 'zonal name is required',
    }),
    pbsCode: z.string({
      required_error: 'pbs code is required',
    }),
    zonalCode: z.string({
      required_error: 'pbs code is required',
    }),
  }),
});
const update = z.object({
  body: z.object({
    substationCode: z.string().optional(),
    substationName: z.string().optional(),
    pbsCode: z.string().optional(),
    zonalCode: z.string().optional(),
  }),
});

export const SubstationValidation = {
  create,
  update,
};
