import { api } from '../services/api.js';

// Task 1 - product request

export async function getAllProducts() {
  return await api.get('/products');
}

export async function getProductById(id) {
  return await api.get(`/products/${id}`);
}
