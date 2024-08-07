module.exports = (req, res, next) => {
  const token = req.cookies["AuthToken"];
  if (token) {
    try {
      const verified = jwt.verify(token, "secretKey");
      User.findById(verified._id)
        .then((user) => {
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
