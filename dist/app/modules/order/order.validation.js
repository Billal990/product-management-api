"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderValidationSchema = void 0;
const zod_1 = require("zod");
exports.orderValidationSchema = zod_1.z.object({
    email: zod_1.z.string({ message: 'Email is required*' }),
    productId: zod_1.z.string({ message: 'ProductId is required*' }),
    price: zod_1.z.number({ message: 'Price is required*' }),
    quantity: zod_1.z.number({ message: 'Quantity is required*' })
});
