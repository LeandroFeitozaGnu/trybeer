const Model = require('../models/registerModel');
const httpResponse = require('../../utils/httpResponses');
const validators = require('../../utils/validationsEntries');

const registerUser = async (name, email, password, role) => {
    if (!validators.validName(name)
      || !validators.validEmail(email)
      || !validators.validPassword(password)) return httpResponse.INVALID_DATA;
    
    const [userCreated] = await Model.registerUser(name, email, password, role);
    
    if (!userCreated.insertId) return httpResponse.INVALID_DATA;
    return userCreated;
};

module.exports = {
  registerUser,
};
