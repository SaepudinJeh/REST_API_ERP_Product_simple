const createTicketValidation = require('./create.ticket.validation');
const sortOrderValidation = require('./sortOrder.ticket.validation');
const createCustomerValidation = require('./create.customer.validation');
const iDValidation = require('./id.validation');
const updateCustomerValidation = require('./update.customer.validation');
const createProductValidation = require('./create.product.validation');
const updateProductValidation = require('./update.product.validation');

module.exports = {
  createTicketValidation,
  sortOrderValidation,
  createCustomerValidation,
  iDValidation,
  updateCustomerValidation,
  createProductValidation,
  updateProductValidation,
};
