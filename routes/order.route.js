const express = require('express');
const {
  createOrder,
  allOrders,
  deleteOrderById,
  addOrder,
  reduceOrder,
} = require('../controllers');

const router = express.Router();

router.post('/v1/order', createOrder);
router.get('/v1/orders', allOrders);
router.delete('/v1/order', deleteOrderById);
router.put('/v1/order/add', addOrder);
router.put('/v1/order/reduce', reduceOrder);

module.exports = router;
