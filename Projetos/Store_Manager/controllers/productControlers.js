const productService = require('../services/productService');

const getAllProducts = async (_req, res, next) => {
  try {
    const result = await productService.allProducts();
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const productsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const products = await productService.getProductById(id);
    if (!products.length) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json(products[0]);
  } catch (e) {
    next(e);
  }
};

const createProductController = async (req, res, next) => {
  const { name, quantity } = req.body;
  try {
    const allProducts = await productService.allProducts();
    const checkNameEqual = allProducts.some((item) => item.name === name);
    if (checkNameEqual) {
      return res.status(409).json({ message: 'Product already exists' });
    }
    const insertProduct = await productService.createProductService(name, quantity);
    const { insertId } = insertProduct;
    return res.status(201).json({ id: insertId, name, quantity });
  } catch (e) {
    next(e);
  }
};

const updateProductContr = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;
    const { id } = req.params;
    const allProducts = await productService.getProductById(id);
    if (!allProducts.length) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await productService.updateProductSevices(name, quantity, id);
    return res.status(200).json({ id, name, quantity });   
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const allProducts = await productService.getProductById(id);
    if (!allProducts.length) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await productService.deleteProductService(id);
    return res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAllProducts,
  productsById,
  createProductController,
  updateProductContr,
  deleteProduct,
};