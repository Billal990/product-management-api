import { Router } from "express";
import { studentControllers } from "./product.controller";

const route = Router();

route.post("/", studentControllers.createNewProduct);
route.get("/", studentControllers.getAllProducts);
route.get("/search/", studentControllers.searchProducts);
route.get("/:productId", studentControllers.getSingleProduct);
route.put("/:productId", studentControllers.updateProduct);
route.delete("/:productId", studentControllers.deleteProduct);

export const productRoutes = route;