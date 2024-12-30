// src/utils/productApi.js
import axios from "axios";

const PRODUCT_API_URL = "https://dummyjson.com/products";

export const fetchProduct = async () => {
  try {
    const response = await axios.get(PRODUCT_API_URL);
    // console.log(response.data);
    return response.data.products;
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
  }
};
