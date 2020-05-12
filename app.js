//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const nodemailer = require("nodemailer");

const app = express();

//EJS as view engine
app.set("view engine", "ejs");

//Body parser middleware
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

//Static folder
app.use(express.static(__dirname + "/public"));


//Routes

app.get("/", function(req, res) {
  res.render("home", {browserFrameUrl: "WESTENDSFINEST"});
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    browserFrameUrl: "CONTACT"
  });
});

app.get("/send", function(req, res) {
  res.render("send", {
    browserFrameUrl: "CONTACT"
  });
});

app.get("/video", function(req, res) {
  res.render("video", {
    browserFrameUrl: "VIDEO"
  });
});

app.get("/social", function(req, res) {
  res.render("social", {
    browserFrameUrl: "SOCIAL"
  });
});

app.get("/artists", function(req, res) {
  res.render("artists", {
    browserFrameUrl: "ARTISTS"
  });
});

app.get("/tour", function(req, res) {
  res.render("tour", {
    browserFrameUrl: "TOUR"
  });
});

app.get("/shop", function(req, res) {
  res.render("shop", {
    browserFrameUrl: "SHOP"
  });
});


//Contact form
app.post("/send", function(req, res) {
  const output = `
    <p>You have a new contact</p>
    <h3>Contact details</h3>
    <ul>
      <li>Name: ${req.body.name}</li>
      <li>Company: ${req.body.company}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.phone}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;

  let transporter = nodemailer.createTransport({
    host: "gsmtp.gmail.com",
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


//Port
app.listen(process.env.PORT || 8000, function() {
  console.log("server started on port 8000");
});
