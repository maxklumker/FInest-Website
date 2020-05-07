//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const nodemailer = require("nodemailer");

const app = express();

//Static folder
app.use(express.static(__dirname + "/public"));

//View engine setup
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


//Port
app.listen(process.env.PORT || 8000, function() {
  console.log("server started on port 8000");
});
