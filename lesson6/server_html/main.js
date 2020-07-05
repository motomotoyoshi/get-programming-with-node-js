"use strict";

const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  fs = require("fs"),
  plainTextContentType = {
    "Content-Type": "text/plain"
  },
  htmlTextContentType = {
    "Content-Type": "text/html"
  },

  customReadFile = (file, res) => {
    fs.readFile(`./${file}`, (err, data) => {
      if (err) {
        console.log("Error reading the file");
      }
      res.end(data);
    });
  };

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("INDEX");
});

router.get("/index.html", (req, res) => {
  res.writeHead(httpStatus.OK, htmlTextContentType);
  customReadFile("views/index.html", res);
});

router.post("/", (req, res) => {
  res.writeHead(httpStatus.OK, plainTextContentType);
  res.end("POSTED");
});


http.createServer(router.handle).listen(port);
console.log(`The server has started and is listenning on http://localhost:3000`);