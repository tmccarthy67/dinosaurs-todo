var express = require('express');
var app = express();

app.get('/hello.txt', function(req, res) {
    console.log("hello.txt executing")
    res.send('Hello World');
});

app.get('/hello.bye', function(req, res) {
    res.send('Goodbye World');
});

app.get('/', function(req, res) {
    res.send('Home Screen');
});

console.log("Starting to listen");

var server = app.listen(3000, function() {
    console.log('Listening on port' + server.address().port);
});

console.log("Waiting for server to start")