const express = require("express");
const router = express.Router();

const clientController = require("../controllers/clientController");

const newClientController = require("../controllers/newClientController");

router.get("/", clientController.index);

router.get("/newClient", (_req, res) => {
  res.render("clientViews/newClient", { style: "newClient.css" });
});

router.post("/newClient", newClientController.create);

router.get("/:id", clientController.post);

module.exports = router;
