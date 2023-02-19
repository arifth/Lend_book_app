var express = require("express");
var router = express.Router();
var users = require("../controllers/users/users");
var authChecking = require("../middleware/jwt");

/* GET users listing. */
router.get("/users", authChecking.verifyToken, users.getUsers);
router.get("/user/:id", authChecking.verifyToken, users.getUser);

module.exports = router;
