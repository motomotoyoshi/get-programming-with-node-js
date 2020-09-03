"use strict";

const
  port = 3000,
  express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.send("Hello, Universe");
  console.log(req.params);
  console.log(req.url);
  console.log(req.query);
  console.log(req.params);
}).listen(port, () => {
  console.log(`http://localhost:3000`);
});