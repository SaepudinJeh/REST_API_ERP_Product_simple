const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  sortOrder: {
    type: Number,
    required: true,
    unique: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', TicketSchema);

module.exports = Ticket;
