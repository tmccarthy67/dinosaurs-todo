var express = require('express');
var fs = require('fs');
var app = express();

console.log(__dirname)
app.use(express.static(__dirname));

app.get('/', function(req, res) {
    fs.readFile('index.html', function (err, data) {
  		if (err) throw err;
  		res.send(data.toString());
	});
});


console.log("Starting to listen");

var server = app.listen(3000, function() {
    console.log('Listening on port' + server.address().port);
});

console.log("Waiting for server to start")