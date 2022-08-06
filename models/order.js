const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  qty: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customer',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
