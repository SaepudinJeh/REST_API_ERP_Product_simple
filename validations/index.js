const createTicketValidation = require('./create.ticket.validation');
const sortOrderValidation = require('./sortOrder.ticket.validation');
const createCustomerValidation = require('./create.customer.validation');
const customerIdValidation = require('./customerId.validation');
const updateCustomerValidation = require('./update.customer.validation');

module.exports = {
  createTicketValidation,
  sortOrderValidation,
  createCustomerValidation,
  customerIdValidation,
  updateCustomerValidation,
};
