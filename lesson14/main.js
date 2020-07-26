"use strict";

const mongoose = require("mongoose");
const Subscriber = require("./model/subscriber");

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

var subscriber1 = new Subscriber({
  name: "Jon Wexler",
  email: "jon@jonwexler.com"
});

subscriber1.save((err, savedDocument) => {
  if (err) console.log(err);
  console.log(savedDocument);
});

Subscriber.create(
  {
    name: "PPP PPPP3",
    email: "JJJ JJJJ3"
  },
  (err, savedDocument) => {
    if (err) console.log(err);
    console.log(savedDocument);
  }
);

var myQuery = Subscriber.findOne({
  name: "PPP PPPP3"
})
.where("email", /JJJ/);

myQuery.exec((err, data) => {
  if (data) console.log(data.name);
})