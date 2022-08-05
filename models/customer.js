const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
  salesmanId: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default: null,
  },
  city: {
    type: String,
    required: true,
  },
  remark: {
    type: String,
    default: null,
  },
  address: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    default: null,
  },
  province: String,
}, { timestamps: true });

const Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;
