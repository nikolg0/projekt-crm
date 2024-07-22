const mongoose = require("mongoose");

const Client = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  },
  nip: String,
  actions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Action",
    },
  ],
});

module.exports = mongoose.model("Client", Client);
