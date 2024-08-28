import express from 'express';
import { ProductsController } from '../controllers/products.controller';
import { authMiddleware } from '../middlewares/auth.middleware';

const productsRouter=express.Router();


productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/:id",authMiddleware, ProductsController.getProduct);
productsRouter.post("/",authMiddleware, ProductsController.insert);
productsRouter.put("/",authMiddleware, ProductsController.update);
productsRouter.delete("/:id",authMiddleware, ProductsController.delete);


export {productsRouter};