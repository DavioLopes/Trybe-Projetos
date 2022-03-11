const express = require('express');

const controllers = require('../controllers/salesControllers');
const middleware = require('../middlewares/index');

const router = express.Router();

router.get('/', controllers.allSales);

router.post('/', middleware.salesMiddleware,
  controllers.newSale);

router.get('/:id', controllers.salesByID);

router.put('/:id', middleware.salesMiddleware,
  controllers.updateSalesContro);

module.exports = router;