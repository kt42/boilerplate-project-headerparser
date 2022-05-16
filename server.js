// server.js
// where your node app starts


// init project
require('dotenv').config();
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
const port = process.env.PORT || 8089

var listener = app.listen(port, function () {
  console.log('Your app is listening on port ' + listener.address().port + " link: http://localhost:" + listener.address().port);
});



app.get('/api/:whoami', function(req, res) 
{

  var reqlang = req.get("accept-language");
  var reqsoftware = req.get("User-Agent");
  console.log(reqlang, reqsoftware + req.ip);
  var returnObj = {"ipaddress": req.ip, "language": reqlang, "software": reqsoftware}

  res.json(returnObj);
});








