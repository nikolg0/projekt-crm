const Action = require("../models/Actions");
const Client = require("../models/Clients");

module.exports = {
  create: async (req, res) => {
    const clientCookie = req.cookies.user;
    console.log(req.params);
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
          console.log("udało się");
          res.redirect(`/main/${req.params.id}`);
        })
        .catch((err) => {
          console.log("błąd");
          res.send(err);
        });
    } catch {
      console.log("error");
    }
  },
};
