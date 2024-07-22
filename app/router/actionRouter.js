const express = require("express");
const router = express.Router();
const Client = require("../models/Clients");

const newActionController = require("../controllers/newActionController");

router.get("/:id/newAction", (req, res) => {
  console.log(req.params.id);
  let user = req.cookies.user;

  let client = Client.find({ _id: req.params.id });
  console.log(client);

  res.render("actionViews/newAction", { data: user });
});

router.post("/:id/newAction", newActionController.create);

module.exports = router;
