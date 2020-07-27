"use strict";

const Subscriber = require("../model/subscriber");

exports.getAllSubscribers = (req, res, next) => {
  Subscriber.find({})
    .exec()
    .then((subscribers) => {
      res.render("subscribers", {
        subscribers: subscribers
      });
    })
    .catch((err) => {
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

  // newSubscriber.save((err, result) => {
  //   if (err) res.send(err);
  //   res.render("thanks");
  // });
  newSubscriber.save()
    .then(result => {
      res.render("thanks");
    })
    .catch(err => {
      if (err) res.send(err);
    });
};