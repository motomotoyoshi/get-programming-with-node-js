"use strict";

const mongoose = require("mongoose");
const Subscriber = require("./model/subscriber");
const { json } = require("express");

mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true}
);

mongoose.connection;

var contacts = [
  {
    name: "po1",
    email: "po1@example.com",
    zipCode: "05",
  },
  {
    name: "po2",
    email: "po2@example.com",
    zipCode: "05",
  },
  {
    name: "po3",
    email: "po3@example.com",
    zipCode: "05",
  },
];

Subscriber.deleteMany()
  .exec()
  .then(() => {
    console.log("Subscriber data is empty");
  });

var commands = [];

contacts.forEach((c) => {
  commands.push(Subscriber.create({
    name: c.name,
    email: c.email,
  }));
});

Promise.all(commands)
  .then(r => {
    console.log(JSON.stringify(r));
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(`ERROR: ${err}`);
  });