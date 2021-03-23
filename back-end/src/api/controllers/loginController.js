const loginRouter = require('express').Router();

loginRouter.get('/', (req, res) => {
  res.send('controle');
});

module.exports = loginRouter;