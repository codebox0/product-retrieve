import {findProduct, findProductBySMC, getProduct} from '../../services/product.service'
import {Request, Response} from 'express'
import {SearchDto} from "../../dtos/input";
import {ProductDto} from "../../dtos/product";

export const  get =  async  (req: Request, res: Response) => {
    const { id } = req.params;
    // get body data
    const searchDto : SearchDto = req.body;

    console.log('searchDto: ', searchDto);

    const product: ProductDto|string = findProduct(searchDto);

    if (!product) {
        return res.status(404).json({message: `Product ${id} not found`});
    }

    return res.status(200).json({data: product});
};
