const express = require('express');
const {
  getProductsController,
  createProductController,
  deleteAllProduct,
  deleteProductById,
  updateProduct,
} = require('../controllers');

const router = express.Router();

router.get('/v1/products', getProductsController);
router.post('/v1/product', createProductController);
router.delete('/v1/products', deleteAllProduct);
router.delete('/v1/product', deleteProductById);
router.put('/v1/product', updateProduct);

module.exports = router;
