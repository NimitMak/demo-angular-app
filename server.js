//Lets require/import the HTTP module
var http = require('http');
var express = require('express');
var app = express();
//Lets define a port we want to listen to
const PORT = 8080;

app.use(express.static('static'));

app.get('/:filename', function (req, res) {
    console.log("req1", req.params, req.body, req.query)
});

app.get('/*', function (req, res) {
    console.log("req", req.params, req.body, req.query)
  res.sendFile(__dirname + '/static/partials/base.html');
});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
