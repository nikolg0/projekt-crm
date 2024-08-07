const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/signup", (_req, res) => {
  res.render("userViews/signupUser", { style: "signupUser.css" });
});

router.post("/signup", userController.create);

router.get("/login", (_req, res) => {
  res.render("userViews/loginUser", { style: "loginUser.css" });
});

router.post("/login", userController.login);

router.get("/login", (req, res) => {
  if (req.query.loginRedirect) {
    res.render("userViews/loginUser", {
      error: true,
      message: "Proszę się zalogować",
    });
    return;
  }
  res.render("userViews/loginUser");
});

module.exports = router;
