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
});

module.exports = mongoose.model("Client", Client);
