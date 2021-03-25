const connection = require('../../database/connection');

const getAllProducts = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM product',
  );
  return products;
};

module.exports = {
  getAllProducts,
};