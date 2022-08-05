const Joi = require('joi');

const createProductValidation = Joi.object({
  name: Joi.string().min(3).required(),
  desc: Joi.string().min(3).required(),
  price: Joi.number().required(),
  qty: Joi.number().min(1).required(),
  site: Joi.string().optional(),
});

module.exports = createProductValidation;
