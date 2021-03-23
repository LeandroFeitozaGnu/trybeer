const connection = require('../../database/connection');

const login = async (email, password) => {
  try {
    const user = await connection.execute(
      'SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password],
    );
    console.log(user);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  login,
};
