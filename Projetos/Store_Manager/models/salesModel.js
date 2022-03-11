const connection = require('./connection');

const allSales = async () => {
  const SQL = `SELECT 
    salesProducts.sale_id AS saleId,
    sales.date,
    salesProducts.product_id AS productId,
    salesProducts.quantity
FROM
    StoreManager.sales_products AS salesProducts
        JOIN
    StoreManager.sales AS sales ON sales.id = salesProducts.sale_id
ORDER BY salesProducts.sale_id , product_id;`;
  
  const [result] = await connection.execute(SQL);
  return result;
};

const salesByID = async (id) => {
  const SQL = `SELECT 
    sales.date,
    salesProducts.product_id AS productId,
    salesProducts.quantity
FROM
    StoreManager.sales_products AS salesProducts
        JOIN
    StoreManager.sales AS sales ON sales.id = salesProducts.sale_id
WHERE
    salesProducts.sale_id = ?
ORDER BY salesProducts.sale_id , productId;`;
  const [result] = await connection.execute(SQL, [id]);
  return result;
};

const newSale = async () => {
  const SQL = 'INSERT StoreManager.sales () VALUES ();';
  const [result] = await connection.execute(SQL);
  return result;
};

const newSalesProducts = async (saleId, productId, quantity) => {
  const SQL = `INSERT
    StoreManager.sales_products (sale_id, product_id, quantity) 
  VALUES (?, ?, ?);`;
  const [result] = await connection.execute(SQL, [saleId, productId, quantity]);
  return result;
};

const updateSale = async (productId, quantity, id) => {
  const SQL = `UPDATE StoreManager.sales_products 
SET 
    product_id = ?,
    quantity = ?
WHERE
    sale_id = ?;`;
  const [result] = await connection.execute(SQL, [productId, quantity, id]);
  return result;
};

module.exports = {
  allSales,
  salesByID,
  updateSale,
  newSale,
  newSalesProducts,
};