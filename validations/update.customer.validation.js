const Joi = require('joi');

const updateCustomerValidation = Joi.object({
  _id: Joi.string().required(),
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

module.exports = updateCustomerValidation;
