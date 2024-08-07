const User = require("../models/Users");
const bcrypt = require("bcrypt");

module.exports = {
  create: (req, res) => {
    const { email, password } = req.body;

    const newUser = new User({ email, password });
    newUser
      .save()
      .then(() => {
        res.redirect("/auth/login");
      })
      .catch((err) => {
        res.send(err);
      });
  },

  login: (req, res) => {
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          res.render("userViews/loginUser", {
            error: true,
            message: "Ten użytkownik nie istnieje",
            user: req.body,
          });
          return;
        }

        bcrypt.compare(req.body.password, user.password, (err, logged) => {
          if (err) {
            res.render("userViews/loginUser", {
              error: true,
              message: "Błąd logowania",
              user: { email: req.body.email, password: "" },
            });
            return;
          }

          if (logged) {
            let userData = {
              id: user._id,
              name: user.name,
              address: user.address,
              nip: user.nip,
            };
            const token = user.generateAuthToken(user);
            res.cookie("AuthToken", token);
            res.cookie("user", JSON.stringify(userData), {
              httpOnly: true,
              secure: true,
            });
            res.redirect("/");
          } else {
            res.render("userViews/loginUser", {
              error: true,
              message: "Dane logowania nie są zgodne",
              user: { email: req.body.email, password: "" },
            });
            return;
          }
        });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  logout: (_req, res) => {
    res.clearCookie("AuthToken");
    res.redirect("/auth/login");
  },
};
