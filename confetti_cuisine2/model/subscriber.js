"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const subscriberSchema = new Schema({
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
  }],
},
  {
    timestamp: true
  }
);

subscriberSchema.methods.getInfo = function () {
  return `Name: ${this.name} Email: ${this.email} ZipCode: ${this.zipCode}`;
};

module.exports = mongoose.model("Subscriber", subscriberSchema);