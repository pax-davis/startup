const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema({
  userId: String,
  title: String,
  description: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Goal', GoalSchema);
