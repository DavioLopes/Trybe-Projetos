const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const middleware = require('./middleware');

const validationMiddleware = [
  middleware.tokenValidation,
  middleware.nameValidation,
  middleware.ageValidation,
  middleware.talkValidation,
  middleware.watchedatValidation,
  middleware.rateValidation,
];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker',
  controllers.talker);

app.get('/talker/search',
  middleware.tokenValidation,
  controllers.search);

app.get('/talker/:id',
  controllers.getTalkerById);

app.post('/login',
  controllers.login);

app.post('/talker',
  validationMiddleware,
  controllers.createTalker);

app.put('/talker/:id',
  validationMiddleware,
  controllers.updateTalker);

app.delete('/talker/:id',
  middleware.tokenValidation,
  controllers.deleteTalker);

app.listen(PORT, () => {
  console.log('Online');
});
