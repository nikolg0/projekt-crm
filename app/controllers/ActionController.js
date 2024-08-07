const Action = require("../models/Actions");
const Client = require("../models/Clients");

module.exports = {
  create: async (req, res) => {
    const clientCookie = req.cookies.user;
    const { date, type, description } = req.body;
    const clientId = req.params.id;
    try {
      const newAction = new Action({
        date: new Date(date),
        type,
        description,
        clientId,
      });
      newAction
        .save()
        .then(() => {
          res.redirect(`/${req.params.id}`);
        })
        .catch((err) => {
          res.send(err);
        });
    } catch {}
  },
};
