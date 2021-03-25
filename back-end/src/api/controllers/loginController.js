const loginRouter = require('express').Router();
const Service = require('../services/loginService');
const httpStatusCode = require('../../utils/httpStatusCode');

loginRouter.post('/', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Service.loginService(email, password);
      
    if (user.error) {
      return res
        .status(httpStatusCode.BAD_REQUEST)
        .json({ message: user.message });
    } 
  
    return res.status(httpStatusCode.OK).json(user);
  } catch (error) {
    console.log(error);
    return next({
      statusCode: 500,
      errorMessage: error.message,
      error,
    });
  }
});

module.exports = loginRouter;