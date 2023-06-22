const express = require('express');
const router = express.Router();
const StockModel = require('../models/stockModel');
var request = require('request');
var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=';
var api_key = '&apikey=VT2BM0CZYB1E5RKO';

// List of stock symbols
let symbols = ["IBM", "GOOG", "AAPL", "TSLA"];
const asyncHandler = require("express-async-handler");
var stocks = [];

function getDate() {
  var d = new Date();
  d.setDate(d.getDate() - 1);
  // Format date as YYYY-MM-DD
  let dateFormat = d.getFullYear() + "-" + ((d.getMonth() + 1).length != 2 ?
      "0" + (d.getMonth() + 1) : (d.getMonth() + 1)) + "-" +
    (d.getDate().length < 2 ? "0" + d.getDate() : d.getDate());
  return dateFormat
}

async function getStocks() {
  let date = getDate();
  for (const symbol of symbols) {
    request.get({
      url: url + symbol + api_key,
      json: true,
      headers: {
        'User-Agent': 'request'
      }
    }, (err, res, data) => {

      if (err) {
        console.log('Error:', err);
      } else if (res.statusCode !== 200) {
        console.log('Status:', res.statusCode);
      } else {
        var json_data = data["Time Series (Daily)"][date]
        json_data.symbol = symbol;
        stocks.push(json_data);
        // data is successfully parsed as a JSON object:
        console.log(date);
        console.log(data["Time Series (Daily)"][date]);
      }
    });
  }
}
getStocks();

router.get('/', async (req, res) => {
  console.log("stocks: ");
  console.log(stocks);
  res.render('stocks', {
    title: 'Stocks Recap For ' + getDate(),
    stocks: stocks,
  }); // Use the variable name "stocks"
});

module.exports = router;