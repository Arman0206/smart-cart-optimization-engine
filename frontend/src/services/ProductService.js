import { coreApi } from "./apiClient";

const ProductService = {
  getAllProducts: async () => {
    const res = await coreApi.get("/products");
    return res.data;
  },
  getProductById: async (id) => {
    const res = await coreApi.get(`/products/${id}`);
    return res.data;
  },
  createProduct: async (product) => {
    const res = await coreApi.post("/products", product);
    return res.data;
  },
};

export default ProductService;