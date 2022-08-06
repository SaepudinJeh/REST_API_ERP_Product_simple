const {
  createTicketController,
  getTicketController,
  updateStatusTicket,
  deleteAllTicket,
  deleteTicketByOrder,
} = require('./ticket.controllers');

const {
  createCustomerController,
  getCustomersController,
  updateCustomer,
  deleteCustomerById,
  deleteAllCustomer,
} = require('./customer.controllers');

const {
  createProductController,
  getProductsController,
  deleteProductById,
  updateProduct,
  deleteAllProduct,
} = require('./product.controller');

const {
  createOrder,
  allOrders,
  deleteAllOrder,
  deleteOrderById,
  addOrder,
  reduceOrder,
} = require('./order.controllers');

module.exports = {
  createTicketController,
  getTicketController,
  updateStatusTicket,
  deleteAllTicket,
  deleteTicketByOrder,
  createCustomerController,
  getCustomersController,
  updateCustomer,
  deleteCustomerById,
  deleteAllCustomer,
  createProductController,
  getProductsController,
  deleteProductById,
  updateProduct,
  deleteAllProduct,
  createOrder,
  allOrders,
  deleteAllOrder,
  deleteOrderById,
  addOrder,
  reduceOrder,
};
