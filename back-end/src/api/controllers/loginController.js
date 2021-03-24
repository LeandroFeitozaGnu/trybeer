const loginRouter = require('express').Router();
const Service = require('../services/loginService');

loginRouter.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await Service.loginService(email, password);
    
  if (user.error) return res.status(user.code).json({ message: user.message });

  return res.status(user.code).json({ message: user.message });
});

module.exports = loginRouter;