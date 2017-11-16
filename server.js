var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlEncoded({extended: false}))
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
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/seated", function (req, res) {
  var seated = {'name': 'person'}
  res.JSON(seated)
})

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});