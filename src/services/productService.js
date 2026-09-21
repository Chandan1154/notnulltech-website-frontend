import {
  getProducts,
  getProductById,
} from "../api/productsApi";

export const fetchProducts = () => getProducts();

export const fetchProduct = (id) => getProductById(id);