"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignationValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        designationName: zod_1.z.string({
            required_error: 'designationName is required',
        }),
        departmentId: zod_1.z.string({
            required_error: 'departmentId is required',
        }),
    }),
});
exports.DesignationValidation = {
    create,
};
