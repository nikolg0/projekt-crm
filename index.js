const express = require("express");
const app = express();
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const clientRouter = require("./app/router/clientRouter");

const actionRouter = require("./app/router/actionRouter");

const userRouter = require("./app/router/userRouter");

mongoose.connect("mongodb://127.0.0.1:27017/projekt-CRM");

app.engine("hbs", hbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/main", clientRouter, actionRouter);

app.use("/login", userRouter);

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
