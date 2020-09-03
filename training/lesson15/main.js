"use strict";

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const subscribersController = require("./controllers/subscribersController");
const subscriber = require("./model/subscriber");

mongoose.Promise = global.Promise

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose.")
});

// var subscriber1 = new Subscriber({
//   name: "Jon Wexler",
//   email: "jon@jonwexler.com"
// });

// subscriber1.save((err, savedDocument) => {
//   if (err) console.log(err);
//   console.log(savedDocument);
// });

// Subscriber.create(
//   {
//     name: "PPP PPPP3",
//     email: "JJJ JJJJ3"
//   },
//   (err, savedDocument) => {
//     if (err) console.log(err);
//     console.log(savedDocument);
//   }
// );

// var myQuery = Subscriber.findOne({
//   name: "PPP PPPP3"
// })
// .where("email", /JJJ/);

// myQuery.exec((err, data) => {
//   if (data) console.log(data.name);
// });

app.set("view engine", "ejs");

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.get(
  "/subscribers",
  subscribersController.getAllSubscribers,
  (req, res, next) => {
    console.log(req.data);
    // res.send(req.data);
    res.render("subscribers", {subscribers: req.data});
  }
);

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);


app.listen("3000");
console.log("http://localhost:3000/subscribers");