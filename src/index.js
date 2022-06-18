const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');

const start = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/', router);

  const server = app.listen(3000, () => {
    console.log('Running on port 3000');
  });
};

start();
