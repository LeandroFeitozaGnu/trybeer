const connection = require('../../database/connection');
const response = require('../../utils/userConstants');

const login = async (email, password) => {
  try {
    const [user] = await connection.execute(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
    );
    return user;
  } catch (error) {
    console.error(error);
    return response.SQL_ERROR;
  }
};

module.exports = {
  login,
};
