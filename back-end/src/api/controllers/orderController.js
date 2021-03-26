const orderRouter = require('express').Router();
const httpResponse = require('../../utils/httpResponses');
const httpStatusCode = require('../../utils/httpStatusCode');
const Service = require('../services/orderService');

orderRouter.post('/', async (req, res, next) => {
  try {
    const { userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status } = req.body;
    await Service.registerOrder(
      userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
    );
    
    res.status(httpStatusCode.OK).json(httpResponse.ORDER_FINISHED.message);
  } catch (error) {
    next({
      statusCode: 500,
      errorMessage: (error.sqlMessage) ? httpResponse.SQL_ERROR.message : error.message,
      error,
    });
  }
});

module.exports = orderRouter;