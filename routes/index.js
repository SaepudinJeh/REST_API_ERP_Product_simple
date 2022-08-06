const express = require('express');

const router = express.Router();

const customer = require('./customer.route');
const ticket = require('./ticket.routes');
const product = require('./product.route');
const order = require('./order.route');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = (app) => {
  app.use(router);
  app.use(customer);
  app.use(ticket);
  app.use(product);
  app.use(order);
};
