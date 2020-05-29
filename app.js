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
  res.render("home", {
    browserFrameUrl: "WESTENDSFINEST"
  });
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

const router = require("./routes/send.js");
app.use(router);


//Port
app.listen(process.env.PORT || 8000, function() {
  console.log("server started on port 8000");
});
