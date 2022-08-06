const Joi = require('joi');

const orderValidation = Joi.object({
  productId: Joi.string().required(),
  customerId: Joi.string().required(),
  qty: Joi.number().required(),
});

module.exports = orderValidation;
