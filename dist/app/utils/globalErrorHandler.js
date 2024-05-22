"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const respond_1 = require("./respond");
const zod_1 = require("zod");
const globalErrorHandler = (error, req, res, next) => {
    if (error) {
        if (error instanceof zod_1.z.ZodError) {
            (0, respond_1.respond)(res, 400, false, 'Data Validaition Error', null, error);
        }
        else {
            (0, respond_1.respond)(res, 400, false, error === null || error === void 0 ? void 0 : error.message, null, error);
        }
    }
    else {
        next();
    }
};
exports.globalErrorHandler = globalErrorHandler;
