"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueItemValidation = void 0;
const zod_1 = require("zod");
const create = zod_1.z.object({
    body: zod_1.z.object({
        serialNo: zod_1.z.string().optional(),
        description: zod_1.z.string({
            required_error: 'description is required',
        }),
        purchasedate: zod_1.z.string({
            required_error: 'purchasedate is required',
        }),
        price: zod_1.z.string({
            required_error: 'price is required',
        }),
        warranty: zod_1.z.string({
            required_error: 'warranty is required',
        }),
        identificationNo: zod_1.z.string().optional(),
        status: zod_1.z.string({
            required_error: 'status is required',
        }),
    }),
});
exports.RevenueItemValidation = {
    create,
};
