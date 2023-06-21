const express = require('express');
const router = express.Router();
const Stock = require('../models/stockModel');

// GET /stocks
router.get('/', async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.render('stocks', { title: 'Stocks Page', stocks: stocks }); // Pass the stocks array as 'stocks'
  } catch (error) {
    console.error('Error fetching stocks:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
