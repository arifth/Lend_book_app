var express = require("express");
var router = express.Router();
var lending = require("../controllers/Lending/lending");
var mail = require("../middleware/mailer");

/* GET users listing. */
router.get("/lendings", lending.getLendings);
router.get("/lending/:id", lending.getLending);
router.post("/lending", lending.addLending);
router.patch(
  "/approveLending/:id",
  mail.sendNotificationLending,
  lending.approveLending
);
router.patch(
  "/returnLending/:id",
  mail.sendNotificationReturning,
  lending.returnLending
);
router.delete("/lending/:id", lending.deleteLending);

module.exports = router;
