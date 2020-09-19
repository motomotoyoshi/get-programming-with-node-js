"use strict";

const mongoose = require("mongoose");
const subscriberSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  zipCode: {
    type: Number,
    min: [10000, "Zip code too short"],
    max: 99999
  },
  courses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course"
  }]
});

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} ZipCode: ${this.zipCode}`;
};

subscriberSchema.methods.findLocalSubscribers = function() {
  return this.model("Subscriber").find({ZipCode: this.zipCode}).exec();
};

module.exports = mongoose.model("Subscriber", subscriberSchema);