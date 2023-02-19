var express = require("express");
var router = express.Router();
var mailer = require("../middleware/mailer");

/* GET users listing. */
router.get("/sendMail", mailer.sendNotificationLending);
module.exports = router;
