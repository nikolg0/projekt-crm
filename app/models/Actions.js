const mongoose = require("mongoose");

const Action = new mongoose.Schema({
  date: Date,
  type: String,
  description: String,
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

module.exports = mongoose.model("Action", Action);
