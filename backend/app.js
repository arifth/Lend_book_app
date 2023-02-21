var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
require("dotenv").config();
var cors = require("cors");
var bodyParser = require("body-parser");

// instantiate new express obj here
var app = express();

app.use(express.json());
// declare middleware here

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
console;
console.log(path.join(__dirname, "..", "frontend", "dist", "index.html"));
app.use(
  "/frontend",
  express.static(path.join(__dirname, "..", "frontend", "dist", "index.html"))
);
app.use(
  "/assets",
  express.static(path.join(__dirname, "..", "frontend", "dist", "assets"))
);
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
// app.use(cookieSession);

// declare route being used here,prefix with /api/v1
app.use("/uploads", express.static("uploads"));
app.use("/api/v1/", indexRouter);

module.exports = app;
