const Action = require("../models/Actions");
const Client = require("../models/Clients");

module.exports = {
  create: (req, res) => {
    const userCookie = req.cookies.user;
    console.log(req.params);
    const { date, type, description } = req.body;
    const newAction = new Action({
      date,
      type,
      description,
      clientId: userCookie.id,
    });
    console.log(userCookie);
    newAction
      .save()
      .then(() => {
        console.log("udało się");
        res.redirect(`/main/${req.params.id}/newAction`);
      })
      .catch((err) => {
        console.log("błąd");
        res.send(err);
      });
  },
};
