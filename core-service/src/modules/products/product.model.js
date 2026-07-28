const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String },
  image: { type: String, default: "" },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
  views: { type: Number, default: 0 },

  // ⭐ AI Embedding
  embedding: {
    type: [Number],
    default: [],
  },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);