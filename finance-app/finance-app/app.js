require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const socialRouter = require('./routes/social');
const leaderboardRouter = require('./routes/leaderboard');
const stocksRouter = require('./routes/stocks');
const learnRouter = require('./routes/learn');

const app = express();

// Set up mongoose connection
const mongoDB = 'mongodb+srv://stuy_password:google@cluster0.aohhsht.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'secret' }));
app.use(express.static(path.join(__dirname, 'public')));

const apiKey = process.env.STOCK_API_KEY;

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/social', socialRouter);
app.use('/leaderboard', leaderboardRouter);
app.use('/stocks', stocksRouter);
app.use('/learn', learnRouter);

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
