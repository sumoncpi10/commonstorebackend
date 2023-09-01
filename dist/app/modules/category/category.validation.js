"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        categoryName: zod_1.z.string({
            required_error: 'zonal code is required',
        }),
        itemTypeId: zod_1.z.string({
            required_error: 'zonal name is required',
        }),
    }),
});
exports.CategoryValidation = {
    create,
};
