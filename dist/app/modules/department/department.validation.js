"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        departmentName: zod_1.z.string({
            required_error: 'department Name is required',
        }),
    }),
});
exports.DepartmentValidation = {
    create,
};
