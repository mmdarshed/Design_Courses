const mongoose = require("mongoose");

const User = new mongoose.Schema({
  user_id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  is_active: { type: Boolean, required: true },
  joined_on: { type: Date, default: Date.now },
});

const user = mongoose.model("User", User);

module.exports = user;
