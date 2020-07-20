"use strict";

const mongoose = require("mongoose");

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