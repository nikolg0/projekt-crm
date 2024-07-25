const Action = require("../models/Actions");
const Client = require("../models/Clients");

module.exports = {
  create: async (req, res) => {
    const userCookie = req.cookies.user;
    console.log(req.params);
    const { date, type, description } = req.body;
    const clientId = userCookie.id;
    try {
      const newAction = new Action({
        date,
        type,
        description,
        clientId,
      });
      console.log("id ciasteczka");
      console.log(userCookie);
      const savedAction = await newAction
        .save()
        .then(() => {
          console.log("udało się");
          res.redirect(`/main/${req.params.id}/newAction`);
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
