const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
    default: null,
  },
  price: {
    type: Number,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
    default: 1,
  },
  site: {
    type: String,
    default: 'GUDANG',
    required: true,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
