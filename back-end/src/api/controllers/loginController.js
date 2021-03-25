const loginRouter = require('express').Router();
const Service = require('../services/loginService');
const httpStatusCode = require('../../utils/httpStatusCode');

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await Service.loginService(email, password);
    
  if (user.error) return res.status(httpStatusCode.BAD_REQUEST).json(user.message);

  return res.status(httpStatusCode.OK).json(user);
});

module.exports = loginRouter;