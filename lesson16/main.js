"use strict";

const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/confetti_cuisine",
  {useNewUrlParser: true}
);
mongoose.Promise = global.Promise;