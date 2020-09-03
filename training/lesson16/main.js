"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const subscribersController = require("./controllers/subscribersController");

mongoose.connect("mongodb://localhost:27017/recipe_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose.");
});


app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.get("/subscribers", subscribersController.getAllSubscribers);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.listen("3000");
console.log("http://localhost:3000/subscribers");