import { z } from 'zod';

const create = z.object({
  body: z.object({
    mobileNo: z.string({
      required_error: 'mobileNo code is required',
    }),
    name: z.string({
      required_error: 'Name code is required',
    }),
    password: z.string({
      required_error: 'password name is required',
    }),
    pbsCode: z.string({
      required_error: 'pbsCode code is required',
    }),
    zonalCode: z.string().optional(),
    substationCode: z.string().optional(),
    complainCode: z.string().optional(),
  }),
});
const update = z.object({
  body: z.object({
    mobileNo: z.string().optional(),
    password: z.string().optional(),
    pbsCode: z.string().optional(),
    zonalCode: z.string().optional(),
    substationCode: z.string().optional(),
    complainCode: z.string().optional(),
  }),
});
const UserTransferRequstOrApproveOrCancle = z.object({
  body: z.object({
    mobileNo: z.string({
      required_error: 'Mobile No Number is required',
    }),
  }),
});
export const UserValidation = {
  create,
  update,
  UserTransferRequstOrApproveOrCancle,
};
