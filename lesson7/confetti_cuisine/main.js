"use strict";

const
  port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentType"),
  utils = require("./utils");