"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
const multer_1 = __importDefault(require("multer"));
const product_controller_1 = require("../controller/product-controller");
const upload = (0, multer_1.default)();
let product = new product_controller_1.ProductController();
productRouter.get('/create', product.showCreateProduct);
productRouter.post('/create', upload.none(), product.createProduct);
productRouter.get('/list', product.showList);
exports.default = productRouter;
//# sourceMappingURL=routes.js.map