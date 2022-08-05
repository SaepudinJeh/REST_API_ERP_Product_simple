const Joi = require('joi');

const customerIdValidation = Joi.object({
  _id: Joi.string().required(),
});

module.exports = customerIdValidation;
