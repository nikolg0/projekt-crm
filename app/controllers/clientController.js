const Client = require("../models/Clients");
const Action = require("../models/Actions");

module.exports = {
  index: (req, res) => {
    Client.find({})
      .lean()
      .then((clients) => {
        res.render("clientViews/client", {
          clients: clients,
          viewName: "clientView",
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
            res.render("clientViews/singleClient", {
              post: post,
              actions: actions,
              viewName: "singleView",
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
        res.redirect("/");
      })
      .catch((err) => {
        res.send(err);
      });
  },
};
