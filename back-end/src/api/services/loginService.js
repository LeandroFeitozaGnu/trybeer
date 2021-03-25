const Model = require('../models/loginModel');
const httpResponse = require('../../utils/httpResponses');
const generateToken = require('../../middlewares/auth/generateToken');

const loginService = async (email, password) => {
  if (!email || !password) return httpResponse.INVALID_DATA;

  const [user] = await Model.login(email, password);

  if (user.length === 0) return httpResponse.USER_NOT_FOUND;
  // if (user.error) return user;
  delete user.password;
  
  const authenticatedUser = generateToken(user);

  return authenticatedUser;
};

module.exports = {
  loginService,
};