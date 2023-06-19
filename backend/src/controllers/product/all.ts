import { Request, Response } from 'express';
import {getProducts} from '../../services/product.service'

export const  getAllProducts = async (req: Request, res: Response) => {
    const products = await getProducts();
    res.status(200).json({data: products});
}
