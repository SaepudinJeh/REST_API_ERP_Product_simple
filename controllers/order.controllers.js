/* eslint-disable no-unsafe-optional-chaining */
const createHttpError = require('http-errors');
const { Order, Product } = require('../models');
const { orderValidation, iDValidation, updateOrderValidation } = require('../validations');

const createOrder = async (req, res, next) => {
  try {
    const body = await orderValidation.validateAsync(req.body);

    const checkQty = await Product.findOne({ _id: body?.productId });

    // check product
    if (!checkQty) {
      return next(createHttpError.BadRequest('Product does not exist!'));
    }

    // Check qty product
    if (checkQty?.qty < body?.qty || checkQty?.qty === 0) {
      return next(createHttpError.BadRequest('Not enough quantity!'));
    }

    // update qty product
    const updateqty = await Product.findOneAndUpdate(
      { _id: body?.productId, qty: { $gte: 0 } },
      { $inc: { qty: -body?.qty } },
      { new: true },
    );

    // When qty product found, save order
    if (updateqty) {
      const order = new Order({
        customer: body?.customerId,
        product: body?.productId,
        qty: body?.qty,
      });

      await order.save();
      return res.status(201).json({
        statusCode: 201,
        message: 'Order Successfully',
      });
    }

    return next(createHttpError.BadRequest('Cant order product!'));
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const allOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate(['customer', 'product']);

    if (orders.length < 1) {
      return res.json({
        statusCode: 200,
        message: 'Cant result Orders',
      });
    }

    return res.json({
      statusCode: 200,
      message: 'Orders result successfully',
      length: orders?.length,
      orders,
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteOrderById = async (req, res, next) => {
  try {
    const body = await iDValidation.validateAsync(req.body);

    const order = await Order.findOne(body).populate('product');

    await Product.findOneAndUpdate(
      { _id: order?.product?._id },
      { $inc: { qty: Number(order?.qty) } },
      { new: true },
    );

    await Order.deleteOne(body);

    return res.json({
      statusCode: 200,
      message: 'Order delete successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const reduceOrder = async (req, res, next) => {
  try {
    const body = await updateOrderValidation.validateAsync(req.body);

    const order = await Order.findOne({ _id: body?.orderId });

    // check product
    if (!order) {
      return next(createHttpError.BadRequest('Order does not exist!'));
    }

    // check qty order if < 1
    if (order?.qty < 1 || order?.qty === 0) {
      return next(createHttpError.BadRequest('Cant reduce order!'));
    }

    // increment qty product
    const updateqty = await Order.findOneAndUpdate(
      { _id: body?.orderId, qty: { $gte: 0 } },
      { $inc: { qty: -1 } },
      { new: true },
    );

    if (updateqty) {
      // decrement qty order
      await Product.findByIdAndUpdate(
        { _id: body?.productId, qty: { $gte: 0 } },
        { $inc: { qty: 1 } },
        { new: true },
      );

      return res.json({
        statusCode: 200,
        message: 'Reduce orders successfully',
      });
    }

    return next(createHttpError.BadRequest('Cant order product!'));
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const addOrder = async (req, res, next) => {
  try {
    const body = await updateOrderValidation.validateAsync(req.body);

    const product = await Product.findOne({ _id: body?.productId });
    const order = await Order.findOne({ _id: body?.orderId });

    // check product
    if (!order) {
      return next(createHttpError.BadRequest('Order does not exist!'));
    }

    // Check qty product
    if (product?.qty < 1 || product?.qty === 0) {
      return next(createHttpError.BadRequest('Cant add order!'));
    }

    // decrement qty product
    const updateqty = await Product.findOneAndUpdate(
      { _id: body?.productId, qty: { $gte: 0 } },
      { $inc: { qty: -1 } },
      { new: true },
    );

    if (updateqty) {
      // Increment qty order
      await Order.findByIdAndUpdate(
        { _id: body?.orderId, qty: { $gte: 0 } },
        { $inc: { qty: 1 } },
        { new: true },
      );

      return res.json({
        statusCode: 200,
        message: 'Reduce orders successfully',
      });
    }

    return next(createHttpError.BadRequest('Cant order product!'));
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

module.exports = {
  createOrder,
  allOrders,
  deleteOrderById,
  reduceOrder,
  addOrder,
};
