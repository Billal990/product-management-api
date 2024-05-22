"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/modules/product/product.route");
const undefinedRouteErrorHandler_1 = require("./app/utils/undefinedRouteErrorHandler");
const globalErrorHandler_1 = require("./app/utils/globalErrorHandler");
const order_route_1 = require("./app/modules/order/order.route");
exports.app = (0, express_1.default)();
//Parsers
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
//Application Routes
exports.app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome To The Product Management API',
    });
});
exports.app.use('/api/products', product_route_1.productRoutes);
exports.app.use('/api/orders', order_route_1.orderRoutes);
//Global Error Handler
exports.app.use(globalErrorHandler_1.globalErrorHandler);
//Undefined Route Error Handler
(0, undefinedRouteErrorHandler_1.undfinedRouteHandler)();
