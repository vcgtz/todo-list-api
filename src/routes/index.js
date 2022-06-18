const express = require('express');
const router = express.Router();
const workplaceRouter = require('./workplace');

router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

router.use('/workplace', workplaceRouter);

module.exports = router;
