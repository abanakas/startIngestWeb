//'use strict';
//var http = require('http');
//var port = process.env.PORT || 1337;

//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);

var http = require('http');
//var express = require('express');
//var app = express();
//var path = require('path');

http.createServer(function (request, response) {
    //Send the HTTP header
    //HTTP Status: 200 : OK
    //Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    //Send the response body as "Hello World"
    response.end('Hello World\n');
}).listen(1337);

//Console will print the message
console.log('Server running at http://127.0.0.1:1337/');

//app.get('/', function (req, res) {
//    res.sendFile(path.join(__dirname + '/index.html'));
//});

//app.get('/start.html', function (req, res) {
//    res.sendFile(path.join(__dirname + '/start.html'));
//});

//app.listen(1337);
