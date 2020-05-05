//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


//start server
app.listen(process.env.PORT || 8000, function() {
  console.log("server started on port 8000");
});
