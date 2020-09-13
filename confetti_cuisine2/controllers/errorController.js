"use strict";

const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
  let errorCode = httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.render("error");
}

exports.internalServerError = (err, req, res, next) => {
  let errCode = httpStatus.internalServerError;
  console.log(`ERROR occured: ${err.stack}`);
  res.status(errCode);
  res.send(`${errCode} | Sorry, our application is taking a nap!`);
};