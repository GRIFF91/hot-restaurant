var express = require('express')
var bodyParser = require('body-parser')
var path = require("path");

var data = require('./app.js')

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//views
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

//tables
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/api/reserved", function (req, res) {
  res.json(data.reserved)
})

app.get('/api/waitlist', function (req, res) {
  res.json(data.waitList)
})

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  console.log(newReservation)
  newReservation.unique = newReservation.Name.replace(/\s+/g, "").toLowerCase() + Date.now();

  if (data.reserved.length === 5) {
    data.waitList.push(newReservation)
  } else data.reserved.push(newReservation)

  res.json(newReservation)
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});