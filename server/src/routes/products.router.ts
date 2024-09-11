import express from 'express';
import { ProductsController } from '../controllers/products.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editProductsMiddleware } from '../middlewares/edit.products.middleware';
import multer from 'multer';

const productsRouter=express.Router();


productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/filter/:filter", authMiddleware,editProductsMiddleware,  ProductsController.filterProducts);
productsRouter.get("/mealId/:mealId", authMiddleware, editProductsMiddleware, ProductsController.filterByMeal);
productsRouter.get("/userId/:userId", authMiddleware, editProductsMiddleware, ProductsController.myMeal);
productsRouter.get("/:id",authMiddleware, editProductsMiddleware, ProductsController.getProduct);
productsRouter.post("/",authMiddleware, editProductsMiddleware, ProductsController.insert);

productsRouter.delete("/:id",authMiddleware, editProductsMiddleware, ProductsController.delete);

const storageFiles=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './img')
    },
    filename: (req, file, cb)=>{
        const userId=req.params.id;
         const fileName="p_"+userId+"_"+Date.now()+".jpg";
     
       
        cb(null, fileName)
    }
})
productsRouter.post("/:id", authMiddleware, multer({storage:storageFiles}).single('file'), ProductsController.insert);

productsRouter.put("/:id",authMiddleware, multer({storage:storageFiles}).single('file'), ProductsController.update);



export {productsRouter};