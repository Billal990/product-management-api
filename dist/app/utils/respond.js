"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.respond = void 0;
function respond(res, statusCode, success, message, data, error) {
    res.status(statusCode).json({
        success,
        message,
        data,
        error,
        code: statusCode,
    });
}
exports.respond = respond;
