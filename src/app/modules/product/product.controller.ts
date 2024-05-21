import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.service";
import { Product } from "./product.interface";
import { respond } from "../../utils/respond";
import { productValidationSchema, updateProductValidationSchema } from "./product.validation";

const createNewProduct = async(req:Request, res:Response, next:NextFunction)=>{
    try {
    const newProduct:Product = req.body;
    productValidationSchema.parse(newProduct) //Validate product before storing to DB
    const result = await productServices.createNewProductIntoDB(newProduct);
    respond(res, 201, true, 'Created A New Product Successfully', result);
    } catch (error) {
        next(error)
    }
}

const getAllProducts = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const result = await productServices.getAllProductsFromDB();
        respond(res, 200, true, 'Retreved All Products Successfully', result)
    } catch (error) {
        next(error)
    }
}

const getSingleProduct = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {productId} = req.params;
        const result = await productServices.getSingleProductFromDB(productId);
        !result ? respond(res, 400, false, 'No Product Found!') : respond(res, 200, true, 'Retrieved Single Product Successfully', result)
    } catch (error) {
        next(error)
    }
}

const updateProduct = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {productId} = req.params;
        const updateProduct = req.body;
        updateProductValidationSchema.parse(updateProduct);
        const result = await productServices.updateProductIntoDB(productId, updateProduct)
        !result ? respond(res, 400, false, 'No Product Found To Update!') : respond(res, 200, true, 'Updated Product Successfully', result)
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {productId} = req.params;
        const result = await productServices.deleteProductFromDB(productId);
        !result ?  respond(res, 400, false, 'No Product Found To Delete') :  respond(res, 200, true, 'Deleted Product Successfully', result)
    } catch (error) {
        next(error)
    }
}

const searchProducts = async(req:Request, res:Response, next:NextFunction)=>{
    try {
        const {searchTerm} = req.query;
        const result = await productServices.searchProductsIntoDB(searchTerm as string);
        !result || result.length === 0 ?  respond(res, 404, false, `No Product Found With The Search Term '${searchTerm}!'`) :  respond(res, 200, true, `Products matching search term ${searchTerm} fetched successfully!`, result)
    } catch (error) {
        next(error)
    }
}

export const studentControllers = {
    createNewProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}