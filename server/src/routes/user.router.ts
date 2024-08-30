import express  from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { UserController } from "../controllers/user.controller";
import { adminMiddleware } from "../middlewares/admin.middleware";
import multer from "multer";


const userRouter=express.Router();

userRouter.get("/", authMiddleware, adminMiddleware, UserController.getAll);
userRouter.get("/:id",authMiddleware, UserController.getUser);
userRouter.put("/:id", authMiddleware, UserController.update);
userRouter.delete("/:id", authMiddleware, adminMiddleware, UserController.delete);


const storageProfileImages=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './img');

    },
    filename: (req, file, cb)=>{
     
        cb(null, 'pav.jpg');

    }
})

userRouter.post("/:id", 
    authMiddleware, 
    multer({storage:storageProfileImages}).single('image'), 
    UserController.updateProfile);

export {userRouter};