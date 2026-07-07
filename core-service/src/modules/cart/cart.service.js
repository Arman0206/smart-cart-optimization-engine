const Cart = require('./cart.model');

const addToCart = (data) => Cart.create(data);

const getCartByUser = (userId) => Cart.find({ userId }).populate('productId');

const removeFromCart = (id) => Cart.findByIdAndDelete(id);

const updateCartItem = (id, data) => Cart.findByIdAndUpdate(id, data, { new: true });

module.exports = {
  addToCart,
  getCartByUser,
  removeFromCart,
  updateCartItem
};