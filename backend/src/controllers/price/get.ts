import {getPrice} from '../../services/price.service'
import {Request, Response} from 'express'

export const  get =  async  (req: Request, res: Response) => {
    const { id } = req.params;

    const price =  await getPrice(id);


    if (!price) {
        return res.status(404).json({message: `Price ${id} not found`});
    }

    return res.status(200).json({data: price});
};
