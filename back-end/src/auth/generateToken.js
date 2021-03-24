const jwt = require('jsonwebtoken');

const { SECRET } = process.env;

const generateToken = ({ id, name, email, role }) => {
  const user = { id, name, email, role };
  console.log(user);
  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, SECRET, jwtConfig);
  const authenticatedUser = { ...user, token };

  return authenticatedUser;
};

module.exports = generateToken;