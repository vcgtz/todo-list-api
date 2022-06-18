const express = require('express');
const router = express.Router();
const workplaceController = require('../controllers/workplace');

router.get('/', workplaceController.index);

module.exports = router;
