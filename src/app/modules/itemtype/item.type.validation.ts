import { z } from 'zod';

const create = z.object({
  body: z.object({
    itemType: z.string({
      required_error: 'itemType is required',
    }),
  }),
});

export const ItemTypeValidation = {
  create,
};
