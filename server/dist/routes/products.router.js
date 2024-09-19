"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsRouter = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("../controllers/products.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const edit_products_middleware_1 = require("../middlewares/edit.products.middleware");
const multer_1 = __importDefault(require("multer"));
const productsRouter = express_1.default.Router();
exports.productsRouter = productsRouter;
productsRouter.get("/", products_controller_1.ProductsController.getAll);
productsRouter.get("/filter/:filter", auth_middleware_1.authMiddleware, edit_products_middleware_1.editProductsMiddleware, products_controller_1.ProductsController.filterProducts);
productsRouter.get("/mealId/:mealId", auth_middleware_1.authMiddleware, edit_products_middleware_1.editProductsMiddleware, products_controller_1.ProductsController.filterByMeal);
productsRouter.get("/userId/:userId", auth_middleware_1.authMiddleware, edit_products_middleware_1.editProductsMiddleware, products_controller_1.ProductsController.myMeal);
productsRouter.get("/:id", products_controller_1.ProductsController.getProduct);
productsRouter.post("/", auth_middleware_1.authMiddleware, edit_products_middleware_1.editProductsMiddleware, products_controller_1.ProductsController.insert);
productsRouter.delete("/:id", auth_middleware_1.authMiddleware, edit_products_middleware_1.editProductsMiddleware, products_controller_1.ProductsController.delete);
const storageFiles = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './img');
    },
    filename: (req, file, cb) => {
        const userId = req.params.id;
        const fileName = "p_" + userId + "_" + Date.now() + ".jpg";
        cb(null, fileName);
    }
});
productsRouter.post("/:id", auth_middleware_1.authMiddleware, (0, multer_1.default)({ storage: storageFiles }).single('file'), products_controller_1.ProductsController.insert);
productsRouter.put("/:id", auth_middleware_1.authMiddleware, (0, multer_1.default)({ storage: storageFiles }).single('file'), products_controller_1.ProductsController.update);
