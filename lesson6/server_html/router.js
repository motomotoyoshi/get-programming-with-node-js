"use strict";

const
  httpStatus = require("http-status-codes"),
  htmlContentType = {
    "Content-Type": "text/html"
  },

routes = {
  "GET": {
    "/info": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/plain"
      })
      res.end("Welcome to the info Page!")
    }
  },
  "POST": {}
};

exports.handle = (req, res) => {
  try {
    if (routes[req.method][req.url]) {
      routes[req.method][req.url](req,res);
    } else {
      res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
      res.end("<h1>No such file exists</h1>")
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
}