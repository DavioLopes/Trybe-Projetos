require('dotenv').config();
const express = require('express');
const { errorMidlewere } = require('./middlewares');

const app = express();
app.use(express.json());

const { productsRouter, salesRouter } = require('./routes');

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

app.use(errorMidlewere);

app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});