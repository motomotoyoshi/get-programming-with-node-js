"use strict";

const homeController = require("./controllers/homeController");

const
  port = 3000,
  express = require("express"),
  app = express();


// app.use((req, res, next) => {
//   console.log(`request made to ${req.url}`);
//   next();
// });

app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("Post Successful!\n");
});

app.listen(port, () => console.log("http://localhost:3000"));