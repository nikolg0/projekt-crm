const express = require("express");
const router = express.Router();
const Client = require("../models/Clients");

const newActionController = require("../controllers/newActionController");

router.get("/:id/newAction", async (req, res) => {
  console.log(req.params.id);

  let client = await Client.find({ _id: req.params.id }).lean();
  if (!client) {
    return res.status(404).send("Client not found");
  }
  console.log(client);

  res.render("actionViews/newAction", {
    data: client[0],
    style: "newAction.css",
  });
});

router.post("/:id/newAction", newActionController.create);

module.exports = router;
