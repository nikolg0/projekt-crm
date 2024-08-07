const express = require("express");
const router = express.Router();
const Client = require("../models/Clients");

const clientController = require("../controllers/clientController");

const ActionController = require("../controllers/ActionController");

router.get("/", clientController.index);

router.get("/newClient", (_req, res) => {
  res.render("clientViews/newClient", { style: "newClient.css" });
});

router.post("/newClient", clientController.create);

router.get("/:id", clientController.post);

router.get("/:id/newAction", async (req, res) => {
  let client = await Client.find({ _id: req.params.id }).lean();
  if (!client) {
    return res.status(404).send("Client not found");
  }

  res.render("actionViews/newAction", {
    data: client[0],
    style: "newAction.css",
  });
});

router.post("/:id/newAction", ActionController.create);

module.exports = router;
