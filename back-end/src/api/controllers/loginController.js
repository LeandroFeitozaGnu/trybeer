const loginRouter = require('express').Router();
const Service = require('../services/loginService');

loginRouter.post('/', (req, res) => {
  const { email, password } = req.body;
  Service.loginService(email, password);

  res.status(200).json({ message: 'teste' });
});

module.exports = loginRouter;