const salesService = require('../services/saleService');

const allSales = async (_req, res, next) => {
    try {
    const result = await salesService.getAllSales();
    if (!result) {
      return res.status(404).json({ message: 'Sales not found' });
    }
    return res.status(200).json(result); 
  } catch (e) {
  next(e);
  }
};

const salesByID = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await salesService.getAllSalesByID(id);
    if (!result.length) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const newSale = async (req, res, next) => {
  try {
    const createSaleInBD = await salesService.newSaleService();
    const { insertId } = createSaleInBD;
    await Promise.all(req.body.map(async ({ productId, quantity }) => {
      await salesService.newSalesProductService(insertId, productId, quantity);
    }));
    return res.status(201).json({
      id: insertId,
      itemsSold: [
        ...req.body,
      ],
    });
  } catch (e) {
    next(e);
  }
};

const updateSalesContro = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { productId, quantity } = req.body[0];
    await salesService.updateSaleService(productId, quantity, id);
    return res.status(200).json({
      saleId: id,
      itemUpdated: [
        {
          productId,
          quantity,
        },
      ],
    });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  allSales,
  salesByID,
  updateSalesContro,
  newSale,
};