const express = require('express');
const leaderboardDataModel = require('../models/leaderboardDataModel');

const router = express.Router();

// Middleware to check if the user is logged in
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    // User is logged in
    next();
  } else {
    // User is not logged in, redirect to the login page or show an error message
    res.redirect('/social/user/login');
  }
}

router.get('/', async (req, res) => {
  try {
    const leaderboardData = await leaderboardDataModel.find().sort({ amount: -1 });
    res.render('leaderboard', { leaderboardData });
  } catch (error) {
    console.error('Error fetching leaderboard data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', isAuthenticated, async (req, res) => {
  const { name, amount } = req.body;

  try {
    await leaderboardDataModel.create({ name, amount });
    res.sendStatus(200);
  } catch (error) {
    console.error('Error saving user spending data:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
