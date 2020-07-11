"use strict";
const httpStatus = require("http-status-codes");

exports.logErrors = (err, req, res, next) => {
  console.log(err.stack);
  next(err);
};

exports.respondNoResourceFound = (req, res) => {
  let errCode = httpStatus.NOT_FOUND;
  res.status(errCode);
  res.sendFile(`./public/${errCode}.html`, {
    root: "./"
  });
};

exports.respondInternalError = (err, req, res, next ) => {
  let errCode = httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`ERROR occurred: ${err.stack}`);
  res.status(errCode);
  res.send(`${errCode} | Sorrry, our application is experiencing a problem.`);
};