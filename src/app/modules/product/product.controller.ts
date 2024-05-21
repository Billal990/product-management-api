import { NextFunction, Request, Response } from "express";
import { productServices } from "./product.service";
import { Product } from "./product.interface";
import { respond } from "../../utils/respond";
import { productValidationSchema } from "./product.validation";
import {ZodError, z} from "zod"
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
        respond(res, 200, true, 'Retrieved Single Product Successfully', result)
    } catch (error) {
        next(error)
    }
}

const updateProduct = async(req:Request, res:Response)=>{
    try {
        
    } catch (error) {
        
    }
}

const deleteProduct = async(req:Request, res:Response)=>{}

const searchProducts = async(req:Request, res:Response)=>{}

export const studentControllers = {
    createNewProduct,
    getAllProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    searchProducts
}