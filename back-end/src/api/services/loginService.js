const Model = require('../models/loginModel');
const httpCustomMessages = require('../../utils/httpCustomMessages');
const generateToken = require('../../middlewares/auth/generateToken');

const loginService = async (email, password) => {
  console.log(httpCustomMessages.INVALID_DATA)
  if (!email || !password) return httpCustomMessages.INVALID_DATA;

  const [user] = await Model.login(email, password);
    
  if (user.length === 0) return httpCustomMessages.USER_NOT_FOUND;
  if (user.error) return user;
  delete user.password;
  
  const authenticatedUser = generateToken(user);

  return authenticatedUser;
};

module.exports = {
  loginService,
};