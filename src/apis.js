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


export const addProduct = async (data) => {
    try {
        let addResponse = await axios.post(`${domain}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        return addResponse.data;
    }
    catch(err) {
        console.log("Error adding product", err);
    }
}


export const getCategories = async () => {
    try {
        let getCategory = await axios.get(`${domain}/products/categories`);
        return getCategory.data;
    }
    catch (err) {
        console.log("Errors getting Categories", err);
    }
}

export const getCategoryData = async (category) => {
    try {
        let getCateData = await axios.get(`${domain}/products/category/${category}`);
        return getCateData.data;
    }
    catch(err) {
        console.log("Errors getting Category data", err);
    }
}

