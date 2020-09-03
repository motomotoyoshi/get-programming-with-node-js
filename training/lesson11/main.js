"use strict";

const
  // port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
  layouts = require("express-ejs-layouts"),
  errorController = require("./controllers/errorController");

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));

app.get("/name/:myName", homeController.respondWithName);

app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"));
console.log(`http://localhost:${app.get("port")}`);