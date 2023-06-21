require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var socialRouter = require('./routes/social');
var leaderboardRouter = require('./routes/leaderboard');
var stocksRouter = require('./routes/stocks');

var app = express();

// Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const mongoDB = "mongodb+srv://stuy_password:google@cluster0.aohhsht.mongodb.net/?retryWrites=true&w=majority";;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(session({secret: 'secret'}));
app.use(express.static(path.join(__dirname, 'public')));

const apiKey = process.env.STOCK_API_KEY;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/social', socialRouter)
app.use('/leaderboard', leaderboardRouter);
app.use('/stocks', stocksRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;