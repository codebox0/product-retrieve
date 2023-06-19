import React from 'react';
import styles from './Product.module.css';

const ProductError = ({message}: {
    message: string
}) => {
    return (
        <>
            <div className={styles.product_error}>
                <h3>{message}</h3>
            </div>
        </>
    );
};

export default ProductError;
