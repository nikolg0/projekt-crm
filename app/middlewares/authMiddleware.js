const jwt = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = (req, res, next) => {
  const token = req.cookies["AuthToken"];
  console.log("token otrzymany");
  if (token) {
    try {
      const verified = jwt.verify(token, "secretKey");
      console.log("token zweryfikowany");
      User.findById(verified._id)
        .then((user) => {
          console.log("użytkownik znaleziony");
          res.locals.userId = user._id;
          res.locals.userName = user.name;
          next();
        })
        .catch((err) => {
          res.send(err);
        });
    } catch {
      console.log("błąd");
      res.redirect("/auth/login?loginRedirect=true");
    }
  } else {
    res.redirect("/auth/login?loginRedirect=true");
  }
};
