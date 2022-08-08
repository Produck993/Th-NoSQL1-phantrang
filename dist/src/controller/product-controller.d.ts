import { Request, Response } from "express";
export declare class ProductController {
    showCreateProduct: (req: Request, res: Response) => void;
    createProduct: (req: Request, res: Response) => Promise<void>;
    showList: (req: Request, res: Response) => Promise<void>;
}
