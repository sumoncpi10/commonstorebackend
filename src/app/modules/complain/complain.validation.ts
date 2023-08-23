import { z } from 'zod';

const create = z.object({
  body: z.object({
    complainName: z.string({
      required_error: 'complain name is required',
    }),
    complainCode: z.string({
      required_error: 'complain code is required',
    }),
  }),
});

export const ComplainValidation = {
  create,
};
