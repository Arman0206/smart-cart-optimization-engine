
const express = require('express');
const router = express.Router();
const cartController = require('./cart.controller');

router.post('/', cartController.addToCart);
router.get('/', cartController.getCart);
router.get('/popularity', cartController.getPopularity);
router.delete('/:id', cartController.removeFromCart);

module.exports = router;