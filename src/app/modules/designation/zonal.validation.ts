import { z } from 'zod';

const create = z.object({
  body: z.object({
    zonalCode: z.string({
      required_error: 'zonal code is required',
    }),
    zonalName: z.string({
      required_error: 'zonal name is required',
    }),
    pbsCode: z.string({
      required_error: 'pbs code is required',
    }),
  }),
});

export const ZonalValidation = {
  create,
};
