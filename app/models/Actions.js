const mongoose = require("mongoose");

const Action = new mongoose.Schema({
  date: Date,
  type: String,
  description: String,
});

module.exports = mongoose.model("Action", Action);
