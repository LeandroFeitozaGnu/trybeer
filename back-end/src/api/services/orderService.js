/* eslint-disable max-params */
/* eslint-disable complexity */
const Model = require('../models/orderModel');
const httpResponse = require('../../utils/httpResponses');

const registerOrder = async (
  userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status,
) => {
  if (!userID || !totalPrice || !deliveryAddress || !deliveryNumber || !saleDate || !status) {
    return httpResponse.INVALID_DATA;
  }

  const [order] = await Model.registerOrder(
    userID, totalPrice, deliveryAddress, deliveryNumber, saleDate, status
  );

  return order;
};

module.exports = {
  registerOrder,
};