const Client = require("../models/Clients");
const Action = require("../models/Actions");

module.exports = {
  index: (req, res) => {
    Client.find({})
      .lean()
      .then((clients) => {
        res.render("clientViews/client", {
          clients: clients,
          style: "client.css",
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  post: (req, res) => {
    /* let getActions = Action.find({}) */
    Client.findById(req.params.id)
      .lean()
      .then((post) => {
        res.render("clientViews/singleClient", {
          post: post,
          style: "singleClient.css",
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
