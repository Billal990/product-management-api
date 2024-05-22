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
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const variantSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});
const invetorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true,
    },
    inStock: {
        type: Boolean,
        required: true,
    },
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: [String],
    variants: [variantSchema],
    inventory: {
        type: invetorySchema,
        required: true,
    },
}, { versionKey: false });
//create an instance method
// productSchema.method('isProductExists', async function(name:string){
//   const existedProduct = await ProductModel.findOne({name})
//   return existedProduct;
//  })
//create a static method
productSchema.static('isProductExists', function (name) {
    return __awaiter(this, void 0, void 0, function* () {
        const isExistsProduct = yield exports.ProductModel.findOne({ name });
        return isExistsProduct;
    });
});
exports.ProductModel = (0, mongoose_1.model)('Product', productSchema);
