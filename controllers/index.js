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
};
