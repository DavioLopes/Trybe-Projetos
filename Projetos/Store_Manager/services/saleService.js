const salesModel = require('../models/salesModel');

const getAllSales = async () => {
  const result = await salesModel.allSales();
  return result;
};

const getAllSalesByID = async (id) => {
  const result = await salesModel.salesByID(id);
  return result;
};

const updateSaleService = async (productId, quantity, id) => {
  const result = await salesModel.updateSale(productId, quantity, id);
  return result;
};

const newSaleService = async () => {
  const result = await salesModel.newSale();
  return result;
};

const newSalesProductService = async (saleId, productId, quantity) => {
  const result = await salesModel.newSalesProducts(saleId, productId, quantity);
  return result;
};

module.exports = {
  getAllSales,
  getAllSalesByID,
  updateSaleService,
  newSaleService,
  newSalesProductService,
};