const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'stockMarketDB';
const collectionName = 'stocks';

// GET /stocks
router.get('/', async (req, res) => {
  try {
    // Connect to the MongoDB database
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Retrieve stock market data from the database
    const stocks = await collection.find().toArray();

    // Render the stocks.pug template and pass the stock market data
    res.render('stocks', { title: 'Stocks Page', stocks });

    // Close the database connection
    client.close();
  } catch (error) {
    console.error('Error retrieving stock market data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
