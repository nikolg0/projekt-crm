const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const clientRouter = require("./app/router/clientRouter");
const newActionController = require("./app/controllers/newActionController");
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

app.use("/main", clientRouter);

app.get("/main/:id/newAction", (_req, res) => {
  console.log("zapytanie się powiodło");
  res.render("actionViews/newAction");
});

app.post("/main/:id/newAction", newActionController.create);

app.get("/login", (_req, res) => {
  res.render("userViews/loginUser");
});
app.post("/login", userController.login);

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
