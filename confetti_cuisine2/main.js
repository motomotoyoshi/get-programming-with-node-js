"use strict";

const methodOverride = require("method-override");

const express = require("express");
const app = express();

const subscribersController = require("./controllers/subscriberController");
const usersController = require("./controllers/usersController");
const coursesController = require("./controllers/coursesController");
const homeController = require("./controllers/homeController");
const errorController = require("./controllers/errorController");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/confetti_cuisine", {
  useNewUrlParser: true,
});
mongoose.Promise = global.Promise;

const router = express.Router();

const layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use("/", router);
app.use(methodOverride("_method", {methods:["POST", "GET"]}));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(layouts);
app.use(express.static("public"));


app.get("/", (req, res) => {
  res.send("Welcome to Confetti Cuisine!");
});

router.get("/subscribers", subscribersController.index, subscribersController.indexView);
router.get("/subscribers/new", subscribersController.new);
router.post("/subscribers/create", subscribersController.create, subscribersController.redirectView);
router.get("/subscribers/:id", subscribersController.show, subscribersController.showView);
router.get("/subscribers/:id/edit", subscribersController.edit);
router.put("/subscribers/:id/update", subscribersController.update, subscribersController.redirectView);
router.delete("/subscribers/:id/delete", subscribersController.delete, subscribersController.redirectView);


router.get("/users", usersController.index, usersController.indexView);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);
router.get("/users/:id", usersController.show, usersController.showView);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id/update", usersController.update, usersController.redirectView);
router.delete("/users/:id/delete", usersController.delete, usersController.redirectView);


router.get("/courses", coursesController.index, coursesController.indexView);
router.get("/courses/new", coursesController.new);
router.post("/courses/create", coursesController.create, coursesController.redirectView);
router.get("/courses/:id", coursesController.show, coursesController.showView);
router.get("/courses/:id/edit", coursesController.edit);
router.put("/courses/:id/update", coursesController.update, coursesController.redirectView);
router.delete("/courses/:id/delete", coursesController.delete, coursesController.redirectView);

router.get("/contact", subscribersController.new);
router.get("/course-listings", coursesController.index);

// app.get("/courses", homeController.showCourses);
// app.get("/contact", subscribersController.getSubscriptionPage);
// app.get("/subscribers", subscribersController.getAllSubscribers);
// app.post("/subscribe", subscribersController.saveSubscriber);

app.use(errorController.pageNotFoundError);
app.use(errorController.internalServerError);

app.listen(app.get("port"), () => {
  console.log(`running at http://localhost:${app.get("port")}`);
});