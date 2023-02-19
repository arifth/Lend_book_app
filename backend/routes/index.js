var express = require("express");
var router = express.Router();
var usersRouter = require("./users");
var authRouter = require("./auth");
var bookRouter = require("./book");
var mailRouter = require("./mailer");
var categoryRouter = require("./category");
var lendingRouter = require("./lending");

// aggregate all routes here as an array
router.use("/", [
  usersRouter,
  authRouter,
  bookRouter,
  categoryRouter,
  mailRouter,
  lendingRouter,
]); /* GET home page. */

module.exports = router;
