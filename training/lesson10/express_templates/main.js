"use strict";

const
  // port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);

app.get("/name/:myName", homeController.respondWithName);

app.listen(app.get("port"));
console.log(`http://localhost:${app.get("port")}`);