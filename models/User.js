const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  // Other user-related fields
});

module.exports = mongoose.model('User', userSchema);
