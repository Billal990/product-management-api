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
exports.studentControllers = void 0;
const product_service_1 = require("./product.service");
const respond_1 = require("../../utils/respond");
const product_validation_1 = require("./product.validation");
const createNewProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newProduct = req.body;
        product_validation_1.productValidationSchema.parse(newProduct); //Validate product before storing to DB
        const result = yield product_service_1.productServices.createNewProductIntoDB(newProduct);
        (0, respond_1.respond)(res, 201, true, 'Product created successfully!', result);
    }
    catch (error) {
        next(error);
    }
});
const getAllProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { searchTerm } = req.query;
        const result = yield product_service_1.productServices.getAllProductsFromDB(searchTerm);
        if ((result === null || result === void 0 ? void 0 : result.length) === 0) {
            return res.json({
                success: false,
                message: 'Product not found',
            });
        }
        searchTerm
            ? (0, respond_1.respond)(res, 200, true, `Products matching search term '${searchTerm}' fetched successfully!`, result)
            : (0, respond_1.respond)(res, 200, true, 'Products fetched successfully!', result);
    }
    catch (error) {
        next(error);
    }
});
const getSingleProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingleProductFromDB(productId);
        !result
            ? (0, respond_1.respond)(res, 400, false, 'No Product Found!')
            : (0, respond_1.respond)(res, 200, true, 'Product fetched successfully!', result);
    }
    catch (error) {
        next(error);
    }
});
const updateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        product_validation_1.updateProductValidationSchema.parse(updateProduct);
        const result = yield product_service_1.productServices.updateProductIntoDB(productId, updateProduct);
        !result
            ? (0, respond_1.respond)(res, 400, false, 'No Product Found To Update!')
            : (0, respond_1.respond)(res, 200, true, 'Product updated successfully!', result);
    }
    catch (error) {
        next(error);
    }
});
const deleteProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductFromDB(productId);
        !result
            ? (0, respond_1.respond)(res, 400, false, 'No Product Found To Delete')
            : (0, respond_1.respond)(res, 200, true, 'Product deleted successfully!', null);
    }
    catch (error) {
        next(error);
    }
});
exports.studentControllers = {
    createNewProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
};
