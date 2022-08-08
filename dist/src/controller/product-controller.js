"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("../schema/product.model");
class ProductController {
    constructor() {
        this.showCreateProduct = (req, res) => {
            res.render('createProduct');
        };
        this.createProduct = async (req, res) => {
            try {
                const productNew = new product_model_1.Product(req.body);
                const product = await productNew.save();
                if (product) {
                    res.render("success");
                }
                else {
                    res.render("error");
                }
            }
            catch (err) {
                res.render("error");
            }
        };
        this.showList = async (req, res) => {
            try {
                let limit;
                let offset;
                if (!req.query.limit || !req.query.limit) {
                    limit = 3;
                    offset = 0;
                }
                else {
                    limit = parseInt(req.query.limit);
                    offset = parseInt(req.query.offset);
                }
                const products = await product_model_1.Product.find().limit(limit).skip(limit * offset);
                ;
                res.render("listProduct", { products: products });
            }
            catch (_a) {
                res.render("error");
            }
        };
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=product-controller.js.map