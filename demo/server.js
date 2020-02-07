#!/usr/bin/env node
/**
* Extremely simple static website serving script
* This is provided in case you need to deploy a quick demo
*
* Install + run:
*
* 		# from parent directory
*
*		cd demo
*		npm install
*		node server
*
*/

var express = require('express');
var fs = require('fs');

var root = __dirname + '/..';
var app = express();
app.use('/node_modules', express.static(`${root}/node_modules`));
app.use('/examples', express.static(`${root}/examples`));

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: __dirname});
});

app.get('/dist/demo.js', function(req, res) {
	res.sendFile('demo.js', {root: root + '/dist'});
});

app.get('/dist/macgyver.js', function(req, res) {
	res.sendFile('macgyver.js', {root: root + '/dist'});
});

app.get('/dist/macgyver.css', function(req, res) {
	res.sendFile('macgyver.css', {root: root + '/dist'});
});

app.get('/api/webfonts/fa.json', function(req, res) {
	res.sendFile('webfonts-fa.json', {root: root + '/demo'});
});

app.use(function(err, req, res, next){
	console.error(err.stack);
	res.sendStatus(500, 'Something broke!');
});

var port = process.env.PORT || process.env.VMC_APP_PORT || 8080;
var server = app.listen(port, function() {
	console.log('HTTP interface listening on port', port);
});
