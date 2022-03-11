const express = require('express');
const controllers = require('../controllers/productControlers');
const middleware = require('../middlewares/index');

const router = express.Router();

router.get('/', controllers.getAllProducts);

router.post('/',
  middleware.productNameValidation,
  middleware.productQuantityValidation,
  controllers.createProductController);

router.get('/:id', controllers.productsById);

router.put('/:id',
  middleware.productNameValidation,
  middleware.productQuantityValidation,
  controllers.updateProductContr);

router.delete('/:id', controllers.deleteProduct);

module.exports = router;
