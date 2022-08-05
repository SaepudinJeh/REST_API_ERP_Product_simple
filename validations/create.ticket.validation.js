const Joi = require('joi');

const createTicketValidation = Joi.object({
  label: Joi.string().required(),
  sortOrder: Joi.number().required(),
});

module.exports = createTicketValidation;
