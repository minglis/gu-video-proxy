var http = require('http'); 
var sys = require('sys'); 
var utils = require('./utils'); 
var url = require("url"); 
var querystring = require("querystring");
var app = require('express').createServer();

app.get('/', function(req,res) {
	res.send('hello you dogs');
});

app.listen(3000);
