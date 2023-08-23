"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZonalValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        zonalCode: zod_1.z.string({
            required_error: 'zonal code is required',
        }),
        zonalName: zod_1.z.string({
            required_error: 'zonal name is required',
        }),
        pbsCode: zod_1.z.string({
            required_error: 'pbs code is required',
        }),
    }),
});
exports.ZonalValidation = {
    create,
};
