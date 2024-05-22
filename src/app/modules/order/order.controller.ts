import { NextFunction, Request, Response } from "express";
import { orderServices } from "./order.service";
import { Order } from "./order.interface";
import { respond } from "../../utils/respond";
import { orderValidationSchema } from "./order.validation";
import { productServices } from "../product/product.service";
import { ProductModel } from "../product/product.model";







const createNewOrder = async(req:Request, res:Response, next:NextFunction)=>{
   try {
      const newOrder = req.body;
      orderValidationSchema.parse(newOrder)//validate incoming data using zod

    const {productId, quantity:orderQuantity} = newOrder
    const orderedProduct = await productServices.getSingleProductFromDB(productId)

   //  check if ordered quantity excceeds available inventory quantity
   let availableQuantity = orderedProduct?.inventory.quantity;
   if(availableQuantity === 0){
     await ProductModel.findByIdAndUpdate(productId, {$set:{"inventory.inStock":false}})
     return res.json({
         success:false,
         message:'Insufficient quantity available in inventory'
      })
   }
   if(orderQuantity && availableQuantity && orderQuantity > availableQuantity){
     return res.json({
         success:false,
         message:'Insufficient quantity available in inventory'
      })
   }

   await ProductModel.findByIdAndUpdate(productId, {$set:{"inventory.quantity":availableQuantity as number - orderQuantity}})
   const result = await orderServices.createNewOrderIntoDB(newOrder);
    respond(res, 200, true, 'Order created successfully!', result)
   } catch (error) {
    next(error)
   }
}















const getAllOrders = async(req:Request, res:Response, next:NextFunction)=>{
   const {email} = req.query;
   const result = await orderServices.getAllOrdersFromDB(email as string)
   email ? respond(res, 200, true, `Orders fetched successfully for user email (${email})!`, result) : respond(res, 200, true, 'Orders fetched successfully!', result)
}

export const orderControlers = {
    createNewOrder,
    getAllOrders
}