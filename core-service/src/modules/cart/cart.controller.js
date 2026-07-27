
const cartService = require('./cart.service');

const addToCart = async (req, res, next) => {
  try {
    const item = await cartService.addToCart(req.body);
    res.status(201).json(item);
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ message: 'userId is required' });
    const items = await cartService.getCartByUser(userId);
    res.json(items);
  } catch (error) {
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const item = await cartService.removeFromCart(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    next(error);
  }
};

const getPopularity = async (req, res, next) => {
  try {
    const popularity = await cartService.getProductPopularity();
    res.json(popularity);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  getPopularity
};