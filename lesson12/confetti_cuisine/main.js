"use strict";

const express = require("express");
const app = express();
const homeCOntroller = require("./controllers/homeController");
const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Confetti Cuisine!");
});
app.get("/courses", homeCOntroller.showCourses);
app.get("/contact", homeCOntroller.showSignUp);
app.post("/contact", homeCOntroller.postedSignUpForm);

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
});