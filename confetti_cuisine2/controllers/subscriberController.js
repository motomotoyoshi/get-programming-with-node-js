"use strict";

const subscriber = require("../model/subscriber");
const Subscriber = require("../model/subscriber");

exports.getAllSubscribers = (req, res) => {
  Subscriber.find({}).exec()
  .then(subscribers => {
    res.render("subscribers", {
      subscribers: subscribers
    });
  })
  .catch(err => {
    console.log(err.message);
    return [];
  })
  .then(() => {
    console.log("promise complete");
  });
};

exports.getSubscriptionPage = (req, res) => {
  res.render("contact");
};

exports.saveSubscriber = (req, res) => {
  let newSubscriber = new Subscriber({
    name: req.body.name,
    email: req.body.email,
    zipCode: req.body.zipCode
  });

  newSubscriber.save()
  .then(() => {
    res.render("thanks");
  })
  .catch(err => {
    res.send(err);
  });
};