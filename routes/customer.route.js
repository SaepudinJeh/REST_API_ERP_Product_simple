const express = require('express');

const router = express.Router();

const {
  createCustomerController,
  getCustomersController,
  deleteAllCustomer,
  deleteCustomerById,
  updateCustomer,
} = require('../controllers');

router.post('/v1/customer', createCustomerController);
router.put('/v1/customer', updateCustomer);
router.get('/v1/customers', getCustomersController);
router.delete('/v1/customers', deleteAllCustomer);
router.delete('/v1/customer', deleteCustomerById);

module.exports = router;
