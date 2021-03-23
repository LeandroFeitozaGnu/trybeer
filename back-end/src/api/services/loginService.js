const Model = require('../models/loginModel');

const loginService = (email, password) => {
  if (!email || !password) return { message: 'Erro qualquer' };

  Model.login(email, password);
};

module.exports = {
  loginService,
};