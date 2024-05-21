import express, { Application } from 'express';
import cors from "cors"
import { productRoutes } from './app/modules/product/product.route';
import { undfinedRouteHandler } from './app/utils/undefinedRouteErrorHandler';
import { globalErrorHandler } from './app/utils/globalErrorHandler';

export const app: Application = express();

//Parsers
app.use(express.json())
app.use(cors())

//Application Routes
app.use("/api/products", productRoutes)

//Global Error Handler
app.use(globalErrorHandler)

//Undefined Route Error Handler
undfinedRouteHandler()
