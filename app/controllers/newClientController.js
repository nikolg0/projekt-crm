const Client = require("../models/Clients");

module.exports = {
  create: (req, res) => {
    const { name, street, suite, city, zipcode, nip } = req.body;
    const address = {
      street,
      suite,
      city,
      zipcode,
    };
    const newClient = new Client({ name, address, nip });
    newClient
      .save()
      .then(() => {
        res.redirect("/main");
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
