"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControlers = void 0;
const order_service_1 = require("./order.service");
const respond_1 = require("../../utils/respond");
const order_validation_1 = require("./order.validation");
const product_service_1 = require("../product/product.service");
const product_model_1 = require("../product/product.model");
const createNewOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newOrder = req.body;
        order_validation_1.orderValidationSchema.parse(newOrder); //validate incoming data using zod
        const { productId, quantity: orderQuantity } = newOrder;
        const orderedProduct = yield product_service_1.productServices.getSingleProductFromDB(productId);
        //  check if ordered quantity excceeds available inventory quantity
        const availableQuantity = orderedProduct === null || orderedProduct === void 0 ? void 0 : orderedProduct.inventory.quantity;
        if (availableQuantity === 0) {
            yield product_model_1.ProductModel.findByIdAndUpdate(productId, { $set: { "inventory.inStock": false } });
            return res.json({
                success: false,
                message: 'Insufficient quantity available in inventory'
            });
        }
        if (orderQuantity && availableQuantity && orderQuantity > availableQuantity) {
            return res.json({
                success: false,
                message: 'Insufficient quantity available in inventory'
            });
        }
        yield product_model_1.ProductModel.findByIdAndUpdate(productId, { $set: { "inventory.quantity": availableQuantity - orderQuantity } });
        const result = yield order_service_1.orderServices.createNewOrderIntoDB(newOrder);
        (0, respond_1.respond)(res, 200, true, 'Order created successfully!', result);
    }
    catch (error) {
        next(error);
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.query;
    const result = yield order_service_1.orderServices.getAllOrdersFromDB(email);
    //Order not found logic
    if (!result || (result === null || result === void 0 ? void 0 : result.length) === 0) {
        return res.json({
            "success": false,
            "message": "Order not found"
        });
    }
    email ? (0, respond_1.respond)(res, 200, true, `Orders fetched successfully for user email (${email})!`, result) : (0, respond_1.respond)(res, 200, true, 'Orders fetched successfully!', result);
});
exports.orderControlers = {
    createNewOrder,
    getAllOrders
};
