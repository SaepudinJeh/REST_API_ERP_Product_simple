const Joi = require('joi');

const updateOrderValidation = Joi.object({
  productId: Joi.string().required(),
  orderId: Joi.string().required(),
});

module.exports = updateOrderValidation;
