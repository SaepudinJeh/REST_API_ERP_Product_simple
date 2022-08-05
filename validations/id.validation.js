const Joi = require('joi');

const iDValidation = Joi.object({
  _id: Joi.string().required(),
});

module.exports = iDValidation;
