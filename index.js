'use strict';

var express = require('express'),
    path = require('path'),
    app = express(),
    server = require('http').Server(app),
    bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '/')));
app.use(require('morgan')('combined'));
app.use(require('cookie-parser')());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = server.listen(5000, function(){
	console.log('WEB started.');
});
