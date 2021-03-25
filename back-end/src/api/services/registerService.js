const Model = require('../models/registerModel');
const response = require('../../utils/userConstants');
const validators = require('../../utils/validationsEntries');

const registerUser = async (name, email, password, role) => {
    if (!validators.validName(name)
      || !validators.validEmail(email)
      || !validators.validPassword(password)) return response.BAD_REQUEST;
    
    const [userCreated] = await Model.registerUser(name, email, password, role);
    
    if (!userCreated.insertId) return response.BAD_REQUEST;
    return userCreated;
};

module.exports = {
  registerUser,
};
