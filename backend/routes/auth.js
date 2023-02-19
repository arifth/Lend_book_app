var express = require("express");
var router = express.Router();
var auth = require("../controllers/auth/auth");
var authChecking = require("../middleware/jwt");
var mailer = require("../middleware/mailer");

// Tutorial from here
// https://www.bezkoder.com/node-js-express-login-example/

/* GET users listing. */
router.post("/signIn", auth.login);
router.post("/signUp", auth.register);
router.post("/signOut", authChecking.verifyToken, auth.logout);
router.get("/checkAuth", authChecking.verifyToken, auth.checkAuth);

module.exports = router;
