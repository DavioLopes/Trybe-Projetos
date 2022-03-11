const connection = require('./connection');

const getAllProducts = async () => {
  const SQL = 'SELECT * FROM StoreManager.products;';
  const [result] = await connection.execute(SQL);
  return result;
};

const getProductById = async (id) => {
  const SQL = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(SQL, [id]);
  return result;
};

const createProduct = async (name, quantity) => {
  const SQL = 'INSERT StoreManager.products (name, quantity) VALUES (?,?);';
  const [result] = await connection.execute(SQL, [name, quantity]);
  return result;
};

const updateProduct = async (name, quantity, id) => {
  const SQL = 'UPDATE StoreManager.products SET name = ?, quantity = ? WHERE id = ?;';
  const [result] = await connection.execute(SQL, [name, quantity, id]);
  return result;
};

const deleteProduct = async (id) => {
  const SQL = 'DELETE FROM StoreManager.products WHERE id = ?;';
  const [result] = await connection.execute(SQL, [id]);
  return result;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};