import React from 'react';
import styles from './Product.module.css';
import {ProductDto} from "@/utils";

interface fieldType {
    [key: number]: string | Object;
}

const ProductView = ({product}: { product: ProductDto }) => {
    const buildProduct = (product: ProductDto) => {
        if (!product) return <div>Product not found</div>
        let productView = [];

        for (let key in product) {
            productView.push(
                <>
                    <span className={styles.field_item}>
                    <span className={styles.field_name}>{key}: </span>
                    <span className={styles.field_value}>{
                        product[key] instanceof Object ?
                            JSON.stringify(product[key])
                            : typeof product[key] === 'boolean' ? product[key]
                                    ? 'Yes' : 'No'
                                : product[key]
                    }
                    </span>
                </span>
                    <hr/>
                </>
            )
        }
        return productView;
    }
    return (
        <>
            {
                buildProduct(product)
            }
        </>
    );
};

export default ProductView;
