"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            required_error: 'name code is required',
        }),
        designation: zod_1.z.string({
            required_error: 'designation name is required',
        }),
        phone: zod_1.z.string({
            required_error: 'phone code is required',
        }),
        address: zod_1.z.string({
            required_error: 'address code is required',
        }),
        trgId: zod_1.z.string({
            required_error: 'trgId name is required',
        }),
        photoUrl: zod_1.z.string({
            required_error: 'photoUrl code is required',
        }),
        signUrl: zod_1.z.string({
            required_error: 'signUrl name is required',
        }),
        mobileNo: zod_1.z.string({
            required_error: 'mobileNo code is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().optional(),
        designation: zod_1.z.string().optional(),
        phone: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
        trgId: zod_1.z.string().optional(),
        photoUrl: zod_1.z.string().optional(),
        signUrl: zod_1.z.string().optional(),
        mobileNo: zod_1.z.string().optional(),
    }),
});
exports.EmployeeValidation = {
    create,
    update,
};
