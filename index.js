const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const clientRouter = require("./app/router/clientRouter");

const actionRouter = require("./app/router/actionRouter");

const userController = require("./app/controllers/userController");

mongoose.connect("mongodb://127.0.0.1:27017/projekt-CRM");

const Client = require("./app/models/Clients");

const Action = require("./app/models/Actions");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/main", clientRouter, actionRouter);

app.get("/login/signup", (_req, res) => {
  res.render("userViews/signupUser");
});

app.post("/login/signup", userController.create);

app.get("/login", (_req, res) => {
  res.render("userViews/loginUser");
});
app.post("/login", userController.login);

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
