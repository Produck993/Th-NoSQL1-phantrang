import { Router } from "express";
const productRouter = Router();
import multer from 'multer';
import { ProductController } from "../controller/product-controller";
const upload = multer();
let product = new ProductController()

productRouter.get('/create', product.showCreateProduct);
productRouter.post('/create',upload.none(),product.createProduct);
productRouter.get('/list', product.showList)

export default productRouter;