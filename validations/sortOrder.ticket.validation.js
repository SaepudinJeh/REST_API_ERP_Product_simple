const Joi = require('joi');

const sortOrderValidation = Joi.object({
  sortOrder: Joi.number().required(),
});

module.exports = sortOrderValidation;
