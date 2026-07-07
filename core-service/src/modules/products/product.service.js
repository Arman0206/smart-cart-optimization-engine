const Product = require('./product.model');

const createProduct = (data) => Product.create(data);

const getAllProducts = () => Product.find();

const getProductById = (id) => Product.findById(id);

const updateProduct = (id, data) => Product.findByIdAndUpdate(id, data, { new: true });

const deleteProduct = (id) => Product.findByIdAndDelete(id);

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};