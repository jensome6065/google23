const express = require('express');
const router = express.Router();
const StockModel = require('../models/stockModel');

router.get('/', async (req, res) => {
  try {
    const stocks = await StockModel.find();

    res.render('stocks', { title: 'Stocks Page', stocks }); 
  } catch (error) {
    console.error('Error fetching stock market data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;