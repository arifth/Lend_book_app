const nodemailer = require("nodemailer");
// require("dotenv").config();

// get Tutorial from here
// https://dev.to/lo_victoria2666/how-to-build-a-contact-form-with-javascript-and-nodemailer-3i1k

// create instance of email transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST, //replace with your email provider
  port: process.env.MAILER_PORT,
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email server is ready");
  }
});

exports.sendNotificationLending = function (req, res, next) {
  const { email } = req.body;
  const mail = {
    from: "arifthalhah@gmail.com",
    to: email,
    subject: "Lending Confirmation",
    text: "Your Book Lending was confirmed",
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(`unfortunately,there is an error : ${err}`);
      return res.status(500).send("something went wrong!");
    } else {
      console.log(" email sent ");
      return next();
    }
  });
};

exports.sendNotificationReturning = function (req, res, next) {
  const { email } = req.body;
  const mail = {
    from: "arifthalhah@gmail.com",
    to: email,
    subject: "Returning Confirmation",
    text: "Your Book Returning was confirmed",
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(`unfortunately,there is an error : ${err}`);
      return res.status(500).send("something went wrong!");
    } else {
      console.log(" email sent ");
      return next();
    }
  });
};
