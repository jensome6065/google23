const express = require('express');
const router = express.Router();
const StockModel = require('../models/stockModel');

// GET /stocks
router.get('/', async (req, res) => {
  try {
    // Retrieve stock market data from MongoDB
    const stocksData = await StockModel.find();

    // Render the stocks.pug template with the stock market data
    res.render('stocks', { stocksData });
  } catch (error) {
    console.error('Error fetching stock market data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
