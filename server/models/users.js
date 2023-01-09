const mongoose = require("mongoose");

const User = new mongoose.Schema({
  user_id: { type: String },
  name: { type: String },
  email: { type: String },
  is_active: { type: Boolean },
  joined_on: { type: Date, default: Date.now },
});

const user = mongoose.model("User", User);

module.exports = user;
