const registerRouter = require('express').Router();
const Service = require('../services/registerService');
const CONSTANTS = require('../../utils/userConstants');

const { CREATED } = CONSTANTS;

registerRouter.post('/', async (req, res, next) => {
try {
  const { name, email, password, role } = req.body;
  const createdUser = await Service.registerUser(name, email, password, role);
  if (createdUser.error) {
    return next({
      statusCode: createdUser.code,
      errorMessage: createdUser.message,
  });
  }
    res.status(CREATED.code).json(CREATED.message);
} catch (error) {
   next({
    statusCode: 500,
    errorMessage: (error.code === 'ER_DUP_ENTRY') ? 'Email já cadastrado' : error.message,
    error,
   });
}
});

module.exports = registerRouter;