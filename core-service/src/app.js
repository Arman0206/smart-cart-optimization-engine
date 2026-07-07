const express = require('express');
const cors = require('cors');
const productRoutes = require('./modules/products/product.routes');
const cartRoutes = require('./modules/cart/cart.routes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'core-service' });
});

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

app.use(errorHandler);

module.exports = app;