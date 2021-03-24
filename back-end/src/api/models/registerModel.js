const connection = require('../../database/connection');

const registerUser = async (name, email, password, role) => {
  try {
    const result = await connection.execute(
      `INSERT INTO users (name, email, password, role)
      VALUES (?, ?, ?, )`,
      [name, email, password, role],
    );
    return result;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

module.exports = {
  registerUser,
};
