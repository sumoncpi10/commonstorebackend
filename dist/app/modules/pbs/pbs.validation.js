"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PbsValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        pbsCode: zod_1.z.string({
            required_error: 'Year is required',
        }),
        pbsName: zod_1.z.string({
            required_error: 'Title is required',
        }),
    }),
});
exports.PbsValidation = {
    create,
};
