// fetch local data from the backend and display it in the frontend

import {ProductDto} from "@/utils";

export const FindProduct = async (SMC: string, country:string): Promise<ProductDto | string> => {
    const response = await fetch(`http://localhost:8080/products/find`, {
        // method: 'GET',
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            SMC,
            country
        })
    });

    const data = await response.json();

    return data.data;
}