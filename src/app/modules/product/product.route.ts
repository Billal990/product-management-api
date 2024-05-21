import { Router } from "express";
import { studentControllers } from "./product.controller";

const route = Router();

route.post("/", studentControllers.createNewProduct);
route.get("/", studentControllers.getAllProducts);
route.get("/:productId", studentControllers.getSingleProduct);
route.put("/:productId", studentControllers.updateProduct);
route.delete("/:productId", studentControllers.deleteProduct);
route.get("/", studentControllers.searchProducts);

export const productRoutes = route;