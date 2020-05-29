//jshint esversion:6
//will contain the send route
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

//Contact form
const router = express.Router();

router.get("/message", function(req, res) {
  console.log("loool working again");
  res.end();
});

router.post("/send", function(req, res) {
  const output = `
    <h3>Contact details</h3>
    <ul>
      <li>Email: ${req.body.email}</li>
      <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Westendsfinest Website" <wastedfamily.wf@gmail.com>', // sender address
    to: process.env.GMAIL_USER, // list of receivers
    subject: "Westendsfinest Website", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    res.render("send", {browserFrameUrl: "CONTACT"});
  });
});


module.exports = router;
