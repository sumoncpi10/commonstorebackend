import { z } from 'zod';

const create = z.object({
  body: z.object({
    zonalCode: z.string({
      required_error: 'zonal code is required',
    }),
    zonalName: z.string({
      required_error: 'zonal name is required',
    }),
  }),
});
const update = z.object({
  body: z.object({
    zonalCode: z.string().optional(),
    zonalName: z.string().optional(),
  }),
});

export const ZonalValidation = {
  create,
  update,
};
