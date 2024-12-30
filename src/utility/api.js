// @ts-ignore
import axios from "axios";

const BASE_URL = "https://dummyjson.com/products";
export const fetchAllProducts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchProductById = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};
