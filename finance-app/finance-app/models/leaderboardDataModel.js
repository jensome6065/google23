const mongoose = require('mongoose');

const { Schema } = mongoose;

const leaderboardDataSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('LeaderboardData', leaderboardDataSchema);
