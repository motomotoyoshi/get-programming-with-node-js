"use strict";

const courses = [
  {
    title: "Event Driven Cakes",
    cost: 50,
  },
  {
    title: "Artichoke",
    cost: 5,
  },
  {
    title: "Orange Juice",
    cost: 500,
  },
];

exports.showCourses = (req, res) => {
  res.render("courses", {
    offerdCourses: courses
  });
};

exports.showSignUp = (req, res) => {
  res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};