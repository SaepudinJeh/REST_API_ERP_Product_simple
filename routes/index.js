const express = require('express');

const router = express.Router();

const users = require('./users');
const ticket = require('./ticket.routes');

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = (app) => {
  app.use(router);
  app.use(users);
  app.use(ticket);
};
