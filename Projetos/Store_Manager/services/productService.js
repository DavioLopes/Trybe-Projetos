const productModel = require('../models/productModel');

const allProducts = async () => {
  const result = await productModel.getAllProducts();
  return result;
};

const getProductById = async (id) => {
  const result = await productModel.getProductById(id);
  return result;
};

const createProductService = async (name, quantity) => {
  const result = await productModel.createProduct(name, quantity);
  return result;
};

const updateProductSevices = async (name, quantity, id) => {
  const result = await productModel.updateProduct(name, quantity, id);
  return result;
};

const deleteProductService = async (id) => {
  const result = await productModel.deleteProduct(id);
  return result;
};

module.exports = {
  allProducts,
  getProductById,
  createProductService,
  updateProductSevices,
  deleteProductService,
};