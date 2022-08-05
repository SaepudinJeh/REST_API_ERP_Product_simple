const express = require('express');

const router = express.Router();

const {
  createTicketController,
  getTicketController,
  updateStatusTicket,
  deleteAllTicket,
  deleteTicketByOrder,
} = require('../controllers');

router.post('/v1/ticket', createTicketController);
router.get('/v1/tickets', getTicketController);
router.put('/v1/ticket', updateStatusTicket);
router.delete('/v1/tickets', deleteAllTicket);
router.delete('/v1/ticket', deleteTicketByOrder);

module.exports = router;
