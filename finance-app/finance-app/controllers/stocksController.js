const express = require('express');
const router = express.Router();
const Stock = require('../models/stockModel');

router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    console.log(stocks);
    res.render('stocks', { title: 'Stocks Page', stocks }); // Use the variable name "stocks"
  } catch (error) {
    console.error('Error fetching stocks:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;