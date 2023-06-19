import React, {useState} from 'react';
import styles from './Product.module.css';
import ProductError from "@/components/Product-View/ProductError";
import SearchBar from "@/components/search-bar/SearchBar";
import {FindProduct} from "@/api";
import {ProductDto} from "@/utils";
import ProductView from "@/components/Product-View/ProductView";

const Product = () => {
    const [product, setProduct] = useState<ProductDto | string | 0>(0);
    const handleSearch = async (smc: string, country: string) => {
        console.log(smc, country);
        const response = await FindProduct(smc, country);
        setProduct(await response);
        console.log(product);
    }

    return (
        <>
            <SearchBar onSubmit={handleSearch}/>
            <div className={styles.product_box}>
                {
                    product ?
                        (typeof product === 'string')
                            ? <ProductError message={product}/>
                            : <ProductView product={product}/>
                        :
                        product=== 0 ?
                            <ProductError message={'Search product in the search bar'}/>
                            : <ProductError message={'Une erreur s\'est produite'}/>
                }
            </div>
        </>
    );
};

export default Product;
