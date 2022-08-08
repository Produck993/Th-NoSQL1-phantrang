import { Request, Response } from "express"
import { Product } from "../schema/product.model"

export class ProductController {
    showCreateProduct = (req : Request,res :Response ) => { 
        res.render('createProduct')
    }

    createProduct = async (req:Request,res : Response) => {
        try {
            const productNew = new Product(req.body);
            const product = await productNew.save();
            if(product) {
                res.render("success")
            } else {
                res.render("error")
            }
        } catch (err){
            res.render("error")
        }
    }

    showList = async (req : Request, res : Response) => {
        // try {
        //     const products = await Product.find()
        //     res.render("listProduct", {products : products})
        // } catch {
        //     res.render ("error")
        // }

        try {
            let limit: number;
            let offset: number;
            if(!req.query.limit || !req.query.limit) {
            limit = 3;
            offset = 0;
            } else {
            limit = parseInt(req.query.limit as string);
            offset = parseInt(req.query.offset as string);
            }
            const products = await Product.find().limit(limit).skip(limit*offset);;
            res.render("listProduct", { products: products });
            } catch {
            res.render("error");
            }
    }
}