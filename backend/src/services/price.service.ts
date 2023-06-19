import * as Prices from '../assets/prices.json'
import {SearchDto, searchProductDto} from "../dtos/input";
import {PriceDto} from "../dtos/price";


const findPrice = (smc: string, country?: string): PriceDto | null  => {
    const price =  Object.values(Prices).find(price => {
        let check = price.SMC === smc
            && new Date(price.begin_date) < new Date()
            && new Date(price.end_date) > new Date()

        if(country) check = check &&  price.country === country

        return check
    })

    return price? price : null;
}

const findPriceByProduct = async (product: searchProductDto) => {
    return Prices.filter(price => {
        return price.SMC === `${product.style}${product.material}${product.color}`;
    })
}

const getPrices = async () => {
    return Prices;
}
const getPrice = async (id: string) => {
    return Prices;
}


const getProductPrices = async (product: searchProductDto) => {

}

export {
    findPrice,
    findPriceByProduct,
    getPrices,
    getPrice,
    getProductPrices,
}