#!/usr/bin/env node
/**
* Extremely simple static website serving script
* This is provided to test the GitHub /docs deployment
*
* Install + run:
*
* 		# from parent directory
*
*		cd docs
*		npm install
*		node server
*
*/

var express = require('express');
var fs = require('fs');

var app = express();
app.use('/', express.static(__dirname));

var port = process.env.PORT || process.env.VMC_APP_PORT || 8080;
var server = app.listen(port, function() {
	console.log('HTTP interface listening on port', port);
});
