const mongoose = require('mongoose');

// Define the stock schema
const stockSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

// Define the stock model
const StockModel = mongoose.model('Stock', stockSchema);

module.exports = StockModel;
