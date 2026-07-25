const axios = require("axios");

const coreService = axios.create({
    baseURL: process.env.CORE_SERVICE_URL,
    timeout: 5000,
});

const getAllProducts = async () => {
    const response = await coreService.get("/products");
    return response.data;
};

const getProductById = async (productId) => {
    const response = await coreService.get(`/products/${productId}`);
    return response.data;
};

module.exports = {
    getAllProducts,
    getProductById,
};
