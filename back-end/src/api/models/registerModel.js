const connection = require('../../database/connection');

const registerUser = async (name, email, password, role) => {
  const createdUser = await connection.execute(
    'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
    [name, email, password, role],
  );

  return createdUser;
};

module.exports = {
  registerUser,
};
