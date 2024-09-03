import express from 'express';
import { ProductsController } from '../controllers/products.controller';
import { authMiddleware } from '../middlewares/auth.middleware';
import { editProductsMiddleware } from '../middlewares/edit.products.middleware';
import multer from 'multer';

const productsRouter=express.Router();


productsRouter.get("/", ProductsController.getAll);
productsRouter.get("/:id",authMiddleware, editProductsMiddleware, ProductsController.getProduct);
productsRouter.post("/",authMiddleware, editProductsMiddleware, ProductsController.insert);
productsRouter.put("/",authMiddleware, editProductsMiddleware, ProductsController.update);
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





export {productsRouter};