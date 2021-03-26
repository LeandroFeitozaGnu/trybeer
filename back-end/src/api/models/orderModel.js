/* eslint-disable max-params */
const connection = require('../../database/connection');

const registerOrder = async (
  userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
) => {
  const order = await connection.execute(
    `INSERT INTO sales (user_id, total_price, delivery_address, delivery_number, sale_date, status)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status],
  );
  return order;
};

module.exports = {
  registerOrder,
};
