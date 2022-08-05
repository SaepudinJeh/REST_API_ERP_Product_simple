const Joi = require('joi');

const createCustomerValidation = Joi.object({
  salesmanId: Joi.string().optional(),
  name: Joi.string().min(3).required(),
  pic: Joi.string().optional(),
  city: Joi.string().required(),
  remark: Joi.string().optional(),
  address: Joi.string().min(3).required(),
  contact: Joi.string().required(),
  region: Joi.string().optional(),
  province: Joi.string().required(),
});

module.exports = createCustomerValidation;
