"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubstationValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        substationCode: zod_1.z.string({
            required_error: 'zonal code is required',
        }),
        substationName: zod_1.z.string({
            required_error: 'zonal name is required',
        }),
        pbsCode: zod_1.z.string({
            required_error: 'pbs code is required',
        }),
        zonalCode: zod_1.z.string({
            required_error: 'pbs code is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        substationCode: zod_1.z.string().optional(),
        substationName: zod_1.z.string().optional(),
        pbsCode: zod_1.z.string().optional(),
        zonalCode: zod_1.z.string().optional(),
    }),
});
exports.SubstationValidation = {
    create,
    update,
};
