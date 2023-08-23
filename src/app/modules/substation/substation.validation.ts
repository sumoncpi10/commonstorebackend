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

export const SubstationValidation = {
  create,
};
