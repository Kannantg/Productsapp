import axios from "axios";
import { domain } from "./config";

export const getProducts = async () => {
    try {
        let response = await axios.get(`${domain}/products`);
        return response.data;
    }
    catch (err) {
        console.log("Error getting data", err);
    }
}


export const getProductsDetail = async (id) => {
    try {
        let response = await axios.get(`${domain}/products/${id}`);
        return response.data;
    }
    catch (err) {
        console.log("Error getting detailed data", err);
    }
}



