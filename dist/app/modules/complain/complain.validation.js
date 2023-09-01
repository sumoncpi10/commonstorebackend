"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComplainValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        complainName: zod_1.z.string({
            required_error: 'complain name is required',
        }),
        complainCode: zod_1.z.string({
            required_error: 'complain code is required',
        }),
    }),
});
const update = zod_1.z.object({
    body: zod_1.z.object({
        complainName: zod_1.z.string().optional(),
        complainCode: zod_1.z.string().optional(),
    }),
});
exports.ComplainValidation = {
    create,
    update,
};
