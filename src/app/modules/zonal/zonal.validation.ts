import { z } from 'zod';

const create = z.object({
  body: z.object({
    pbsCode: z.string({
      required_error: 'Year is required',
    }),
    pbsName: z.string({
      required_error: 'Title is required',
    }),
  }),
});

export const PbsValidation = {
  create,
};
