"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mealsRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const meal_controller_1 = require("../controllers/meal.controller");
const mealsRouter = express_1.default.Router();
exports.mealsRouter = mealsRouter;
mealsRouter.get("/", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.getAll);
mealsRouter.get("/filter/:filter", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.filterMeals);
mealsRouter.get("/:id", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.getMeal);
mealsRouter.post("/", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.insert);
mealsRouter.put("/", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.update);
mealsRouter.delete("/:id", auth_middleware_1.authMiddleware, meal_controller_1.MealsController.delete);
