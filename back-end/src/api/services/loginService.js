const Model = require('../models/loginModel');
const response = require('../../utils/userConstants');

const loginService = async (email, password) => {
  if (!email || !password) return response.BAD_REQUEST;

  const user = await Model.login(email, password);
  
  if (user.length === 0) return response.USER_NOT_FOUND;
  if (user.error) return user;
  
  return response.SUCCESFULLY_LOGIN;
};

module.exports = {
  loginService,
};