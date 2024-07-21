const Action = require("../models/Actions");

module.exports = {
  create: (req, res) => {
    const { date, type, description } = req.body;
    const newAction = new Action({ date, type, description });

    newAction
      .save()
      .then(() => {
        console.log("udało się");
        res.redirect("/main/:id");
      })
      .catch((err) => {
        console.log("błąd");
        res.send(err);
      });
  },
};
