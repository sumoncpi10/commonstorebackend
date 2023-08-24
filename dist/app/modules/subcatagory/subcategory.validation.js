"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubCategoryValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        subCategoryName: zod_1.z.string({
            required_error: 'sub Category Name is required',
        }),
        categoryId: zod_1.z.string({
            required_error: 'Category id is required',
        }),
    }),
});
exports.SubCategoryValidation = {
    create,
};
