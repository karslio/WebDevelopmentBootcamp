const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
  var firstName = req.body.fname;
  var lastName = req.body.lname;
  var email = req.body.email;
  console.log(req.body, firstName, lastName, email);
});
app.listen(3002, function() {
  console.log("Server is running on port 3002");
});

//cc891550998c05e853dc3f2cc4642c9a-us4
