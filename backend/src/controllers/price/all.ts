import { Request, Response } from 'express';
import {getPrices} from '../../services/price.service'

export const  getAllPrices = async (req: Request, res: Response) => {
    const prices = await getPrices();
    res.status(200).json({data: prices});
}
