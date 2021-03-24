const jwt = require('jsonwebtoken');

const response = require('../utils/userConstants');

const { SECRET } = process.env;

module.exports = async (req, res, next) => {
    const token = req.headers.authorization;

   if (!token) return response.UNAUTHORIZED; 

    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) return res.status(401).json({ message: err.message });
      req.user = decoded;
    });

    next();
};
