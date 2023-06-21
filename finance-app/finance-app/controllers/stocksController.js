const express = require('express');
const router = express.Router();

// GET /stocks
router.get('/', (req, res) => {
  res.render('stocks', { title: 'Stocks Page' });
});

module.exports = router;
