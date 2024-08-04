const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/signup", (_req, res) => {
  res.render("userViews/signupUser", { style: "signupUser.css" });
});

router.post("/signup", userController.create);

router.get("/", (_req, res) => {
  res.render("userViews/loginUser", { style: "loginUser.css" });
});

router.post("/", userController.login);

module.exports = router;
