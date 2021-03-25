/* eslint-disable max-lines-per-function */
const registerRouter = require('express').Router();
const Service = require('../services/registerService');
const httpStatusCode = require('../../utils/httpStatusCode');
const httpResponse = require('../../utils/httpResponses');

registerRouter.post('/', async (req, res, next) => {
try {
  const { name, email, password, role } = req.body;
  const createdUser = await Service.registerUser(name, email, password, role);
  if (createdUser.error) {
    return next({
      statusCode: httpStatusCode.BAD_REQUEST,
      errorMessage: createdUser.message,
  });
  }
    res.status(httpStatusCode.OK).json({ message: httpResponse.CREATED.message });
} catch (error) {
  if (error.code === 'ER_DUP_ENTRY') {
    res
      .status(httpStatusCode.CONFILCT)
      .json({ message: httpResponse.EMAIL_ALREADY_EXISTS.message });
  }
   next({
    statusCode: 500,
    errorMessage: error.message,
    error,
   });
}
});

module.exports = registerRouter;