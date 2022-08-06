const createHttpError = require('http-errors');
const { Customer } = require('../models');
const { createCustomerValidation, iDValidation, updateCustomerValidation } = require('../validations');

const createCustomerController = async (req, res, next) => {
  try {
    const body = await createCustomerValidation.validateAsync(req.body);

    const customer = new Customer(body);

    await customer.save();

    return res.status(201).json({
      statusCode: 201,
      message: 'Created customer successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const getCustomersController = async (req, res, next) => {
  try {
    const customer = await Customer.find({}).sort({ name: 'asc' });

    if (customer.length < 1) {
      return res.json({
        statusCode: 200,
        message: 'Cant result customers',
      });
    }

    return res.json({
      statusCode: 200,
      message: 'Customers result successfully',
      customers: customer,
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const updateCustomer = async (req, res, next) => {
  try {
    const body = await updateCustomerValidation.validateAsync(req.body);

    const customer = await Customer.findById(body?._id);

    await Customer.where({ _id: body?._id })
      .updateOne({
        $set: {
          name: body?.name || customer?.name,
          salesmanId: body?.salesmanId || customer?.salesmanId,
          pic: body?.pic || customer?.pic,
          city: body?.city || customer?.city,
          remark: body?.remark || customer?.remark,
          address: body?.address || customer?.address,
          contact: body?.contact || customer?.contact,
          region: body?.region || customer?.region,
          province: body?.province || customer?.province,
        },
      });

    return res.json({
      statusCode: 200,
      message: 'Updated customer successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteAllCustomer = async (req, res, next) => {
  try {
    await Customer.deleteMany({});

    return res.json({
      statusCode: 200,
      message: 'Customer deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteCustomerById = async (req, res, next) => {
  try {
    const body = await iDValidation.validateAsync(req.body);

    await Customer.findOneAndDelete(body);

    return res.json({
      statusCode: 200,
      message: 'Customer deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

module.exports = {
  createCustomerController,
  getCustomersController,
  updateCustomer,
  deleteAllCustomer,
  deleteCustomerById,
};
