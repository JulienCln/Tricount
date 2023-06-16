const express = require('express');
const router = express.Router();
const balanceController = require('../controllers/balanceController');

// calcule balance
router.get('/', balanceController.calculateBalance);

module.exports = router;
