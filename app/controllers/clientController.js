const Client = require("../models/Clients");

module.exports = {
  index: (req, res) => {
    Client.find({})
      .lean()
      .then((clients) => {
        res.render("clientViews/client", { clients: clients });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  post: (req, res) => {
    Client.findById(req.params.id)
      .then((post) => {
        res.render("clientViews/singleClient", post);
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
