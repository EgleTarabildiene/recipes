import express from 'express';

import { authMiddleware } from '../middlewares/auth.middleware';

import { MealsController } from '../controllers/meal.controller';


const mealsRouter=express.Router();

mealsRouter.get("/",authMiddleware, MealsController.getAll);
mealsRouter.get("/filter/:filter", authMiddleware,  MealsController.filterMeals);
mealsRouter.get("/:id", authMiddleware,  MealsController.getMeal);
mealsRouter.post("/",authMiddleware,  MealsController.insert);
mealsRouter.put("/",authMiddleware,  MealsController.update);
mealsRouter.delete("/:id",authMiddleware,  MealsController.delete);

export {mealsRouter};