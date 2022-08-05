const createHttpError = require('http-errors');
const { Product } = require('../models');
const { createProductValidation, updateProductValidation, iDValidation } = require('../validations');

const createProductController = async (req, res, next) => {
  try {
    const body = await createProductValidation.validateAsync(req.body);

    const customer = new Product(body);

    await customer.save();

    return res.status(201).json({
      statusCode: 201,
      message: 'Created product successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const getProductsController = async (req, res, next) => {
  try {
    const customer = await Product.find({}).sort({ name: 'asc' });

    if (customer.length < 1) {
      return res.json({
        statusCode: 200,
        message: 'Cant result products',
      });
    }

    return res.json({
      statusCode: 200,
      message: 'Product result successfully',
      customers: customer,
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const body = await updateProductValidation.validateAsync(req.body);

    const product = await Product.findById(body?._id);

    await Product.where({ _id: body?._id })
      .updateOne({
        $set: {
          name: body?.name || product?.name,
          desc: body?.desc || product?.desc,
          price: body?.price || product?.price,
          qty: body?.qty || product?.qty,
          site: body?.site || product?.site,
        },
      });

    return res.json({
      statusCode: 200,
      message: 'Updated product successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteAllProduct = async (req, res, next) => {
  try {
    await Product.deleteMany({});

    return res.json({
      statusCode: 200,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteProductById = async (req, res, next) => {
  try {
    const body = await iDValidation.validateAsync(req.body);

    await Product.findOneAndDelete(body);

    return res.json({
      statusCode: 200,
      message: 'Product deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

module.exports = {
  createProductController,
  getProductsController,
  updateProduct,
  deleteAllProduct,
  deleteProductById,
};
