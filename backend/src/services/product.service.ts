import {SearchDto, searchProductDto} from "../dtos/input";
import * as Products from "../assets/products.json";
import {findPrice} from "./price.service";
import {ProductDto, productSchema, productSchemaValid} from "../dtos/product";
import {PriceDto} from "../dtos/price";


const getProduct = async (id: string) => {
    return Products;
}
const findProduct = (searchInput: SearchDto) => {
    const product: ProductDto | null = filterProduct(searchInput.SMC, searchInput.country);
    if (product) {
        const productAvailable = checkProductAvailability(product);
        if (productAvailable){
           if(searchInput.country && !product.sellable_in?.includes(searchInput.country)) return `Produit indisponible dans ce pays : ${searchInput.country}`

            const price: PriceDto| null = findPrice(searchInput.SMC, searchInput.country);

            console.log('price: ', price)
            return price ?
                 {
                    ...product,
                    ...price
                }
            : 'Produit non trouvé'
        }
        else {
            console.log('productAvailable non available')
            return 'Produit non trouvé'
        }

    }else {
        console.log('product not found')

        return 'Une erreur s\'est produite'
    }
}

const filterProduct = (SMC: string, country?: string): ProductDto | null => {
    const productInput: searchProductDto = {
        style: SMC.substring(0, 6),
        material: SMC.substring(6, 11),
        color: SMC.substring(11, 15),
    }

    console.log('productInput--: ', productInput)
    let product =  Object.values(Products).find(product => {
        let checkAvailable =
            product.style === productInput.style
            && product.material === productInput.material
            && product.color === productInput.color

        return checkAvailable
    });

    return product || null
}

const checkProductAvailability = (product: ProductDto) => {
    const {error} =  productSchema.validate(product)
    // if (error) {
    //     console.log('error: ', error)
    //     return false
    // }
    return product.images && product.images.length > 0
        && product.description && product.description.length > 0
        && (product.sellable_ecom || product.sellable_retail)
        && product.sellable_in && product.sellable_in.length > 0
}

const filterProducts = (SMC: string, country?: string): Array<ProductDto | string> => {
    const productInput: searchProductDto = {
        style: SMC.substring(0, 6),
        material: SMC.substring(6, 11),
        color: SMC.substring(11, 15),
    }

    console.log('productInput--: ', productInput)
    return Object.values(Products).reduce((acc: Array<ProductDto | string>, product: ProductDto) => {
        if (country && !product.sellable_in?.includes(country)) {
            acc.push(`Produit indisponible dans ce pays : ${country}`)
        } else {
            let checkAvailable =
                product.style === productInput.style
                && product.material === productInput.material
                && product.color === productInput.color
                && product.images && product.images.length> 0
                && (product.sellable_ecom || product.sellable_retail)
                && product.sellable_in && product.sellable_in.length > 0

            if(country) checkAvailable = checkAvailable && product.sellable_in?.includes(country)
            checkAvailable?
            acc.push(product)
                : acc.push('Produit non trouvé')
        }
        return acc;
    }, []);

}

const findProductBySMC = (smc: string = '') => {
    const productInput: searchProductDto = {
        style: smc.substring(0, 6),
        material: smc.substring(6, 11),
        color: smc.substring(11, 15),
    }
    const product: ProductDto | undefined = Products.find(product => {
        return product.style === productInput.style && product.material === productInput.material && product.color === productInput.color;
    });

    const price: PriceDto| null = findPrice(smc);

    return {
            ...product,
            ...price
        }

}

const MergeProductPrice = async (productList: Array<ProductDto>, priceList: Array<PriceDto>) => {
    const productPriceList: Array<ProductDto> = productList.map(product => {

        const price = priceList.find(price => {
            return price.SMC === `${product.style}${product.material}${product.color}`;
        });

        return {
            ...product,
            price: price
        }

    });
    return productPriceList;
}

const getProducts = async () => {
    // const validate = validateSchemaData(idSchema, {id});
    return Products;
}


const getProductProducts = async (product: searchProductDto) => {

}

export {
    findProduct,
    findProductBySMC,
    getProducts,
    getProduct,
    getProductProducts,
}