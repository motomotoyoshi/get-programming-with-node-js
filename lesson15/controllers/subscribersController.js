"use strict";

const Subscriber = require("../model/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({}, (err, subscribers) => {
    if (err) next(err);
    req.data = subscribers;
    next();
  });
};