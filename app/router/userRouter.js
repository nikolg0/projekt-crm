const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.use("/", (req, res, next) => {
  if (req.path === "/" || req.path === "") {
    return res.redirect("auth/login");
  }
  next();
});

function redirectIfLogged(req, res, next) {
  if (req.cookies && req.cookies.AuthToken) {
    return res.redirect("/");
  }
  next();
}

router.get("/signup", (_req, res) => {
  res.render("userViews/signupUser", { viewName: "signupView" });
});

router.post("/signup", userController.create);

router.get("/login", redirectIfLogged, (req, res) => {
  if (req.query.loginRedirect) {
    res.render("userViews/loginUser", {
      error: true,
      message: "Proszę się zalogować",
    });
    return;
  }
  res.render("userViews/loginUser", { viewName: "loginView" });
});

router.post("/login", userController.login);

router.get("/logout", userController.logout);

module.exports = router;
