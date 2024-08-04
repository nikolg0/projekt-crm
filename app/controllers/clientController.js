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
    Client.findById(req.params.id)
      .lean()
      .then((post) => {
        if (!post) {
          return;
        }

        Action.find({ clientId: req.params.id })
          .lean()
          .then((actions) => {
            console.log(actions);
            res.render("clientViews/singleClient", {
              post: post,
              actions: actions,
              style: "singleClient.css",
            });
          })
          .catch((err) => {
            res.send(err);
          });
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
