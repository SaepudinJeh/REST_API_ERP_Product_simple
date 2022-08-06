const createHttpError = require('http-errors');

const { Ticket } = require('../models');
const { createTicketValidation, sortOrderValidation } = require('../validations');

const createTicketController = async (req, res, next) => {
  try {
    const body = await createTicketValidation.validateAsync(req.body);

    const ticket = new Ticket(body);

    await ticket.save();

    return res.status(201).json({
      statusCode: 201,
      message: 'Created ticket successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const getTicketController = async (req, res, next) => {
  try {
    const tickets = await Ticket.find({}).sort({ sortOrder: 'asc' });

    if (tickets.length < 1) {
      return res.json({
        statusCode: 200,
        message: 'Cant result tickets',
        length: tickets?.length,
        times: Date.now(),
        tickets,
      });
    }

    return res.json({
      statusCode: 200,
      message: 'Ticket result successfully',
      length: tickets?.length,
      times: Date.now(),
      tickets,
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const updateStatusTicket = async (req, res, next) => {
  try {
    const body = await sortOrderValidation.validateAsync(req.body);

    await Ticket.where(body).updateOne({ $set: { isActive: false } });

    return res.json({
      statusCode: 200,
      message: 'Updated ticket successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteAllTicket = async (req, res, next) => {
  try {
    await Ticket.deleteMany({});

    return res.json({
      statusCode: 200,
      message: 'Tickets deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

const deleteTicketByOrder = async (req, res, next) => {
  try {
    const body = await sortOrderValidation.validateAsync(req.body);

    await Ticket.findOneAndDelete(body);

    return res.json({
      statusCode: 200,
      message: 'Ticket deleted successfully',
    });
  } catch (error) {
    console.log(error?.message);
    return next(createHttpError.BadRequest(error?.message));
  }
};

module.exports = {
  createTicketController,
  getTicketController,
  updateStatusTicket,
  deleteAllTicket,
  deleteTicketByOrder,
};
