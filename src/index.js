require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes');
const { setDefaultsIfTheyDontExists } = require('./config/defaults');

const start = async () => {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));

  // Defaults
  setDefaultsIfTheyDontExists();

  app.use('/', router);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port: ${process.env.PORT}`);
  });
};

start();
