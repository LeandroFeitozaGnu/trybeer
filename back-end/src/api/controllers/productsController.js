const productsRouter = require('express').Router();
const Model = require('../models/productModel');
const httpsStatusCode = require('../../utils/httpStatusCode');
const httpResponse = require('../../utils/httpResponses');

productsRouter.get('/', async (_req, res, next) => {
  try {
    const products = await Model.getAllProducts();
    res.status(httpsStatusCode.OK).json({ products }); 
  } catch (error) {
    return next({
      statusCode: 500,
      errorMessage: (error.sqlMessage) ? httpResponse.SQL_ERROR.message : error.message,
      error,
    });
  }
});

module.exports = productsRouter;