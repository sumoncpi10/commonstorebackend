"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypeValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        itemType: zod_1.z.string({
            required_error: 'itemType is required',
        }),
    }),
});
exports.ItemTypeValidation = {
    create,
};
