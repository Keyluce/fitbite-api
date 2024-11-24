const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  targetCalories: { type: Number, required: true },
  targetProtein: { type: Number, required: true },
  targetCarbs: { type: Number, required: true },
  targetFats: { type: Number, required: true },
  targetFiber: { type: Number, required: true },
  date: { type: String, required: true }, // Format: YYYY-MM-DD
  status: { type: String, default: 'pending' }, // 'met', 'not met'
});

module.exports = mongoose.model('Goal', goalSchema);
