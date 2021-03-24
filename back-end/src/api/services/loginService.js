const Model = require('../models/loginModel');
const response = require('../../utils/userConstants');
const generateToken = require('../../auth/generateToken');

const getToken = (user) => {
  const { id, name, email, role } = user;
  const token = generateToken({ id, name, email, role });

  return token;
};

const loginService = async (email, password) => {
  if (!email || !password) return response.BAD_REQUEST;

  const [user] = await Model.login(email, password);
  
  if (user.length === 0) return response.USER_NOT_FOUND;
  if (user.error) return user;
  
  const authenticatedUser = getToken(user);

  return authenticatedUser;
};

module.exports = {
  loginService,
};