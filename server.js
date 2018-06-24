// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// test API endpoint... 
app.get("/api/test", function (req, res) {
  // res.json({greeting: 'whoami API'});
  // res.json({"ipaddress":"159.20.14.100","language":"en-US,en;q=0.5","software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"});
  
  let ipAddress = "159.20.14.100";
  let language = "en-US,en;q=0.5";
  let software = "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0";
  
  res.json({"ipaddress": ipAddress,"language": language,"software": software});
});

// whoami API endpoint... 
app.get("/api/whoami", function (req, res) {
  
  let ipAddress = req.ip;
  let language = req.get('Accept-Language');
  let software = req.get('User-Agent');
  
  res.json({"ipaddress": ipAddress,"language": language,"software": software});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
