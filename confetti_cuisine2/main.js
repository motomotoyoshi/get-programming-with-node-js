"use strict";

const methodOverride = require("method-override");

const express = require("express");
const app = express();

const subscribersController = require("./controllers/subscriberController");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/confetti_cuisine", {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(methodOverride("_method", {methods:["POST", "GET"]}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.send("Welcome to Confetti Cuisine!");
});

app.get("/courses", homeController.showCourses);
app.get("/contact", subscribersController.getSubscriptionPage);
app.get("/subscribers", subscribersController.getAllSubscribers);
app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`running at http://localhost:${app.get("port")}`);
});