var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var PORT = process.env.PORT || 3000

app.use(bodyParser.urlEncoded({extended: false}))
app.use(bodyParser.json());

//views
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});