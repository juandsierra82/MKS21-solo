var express = require('express'),
		mongoose = require('mongoose');

var port = 8080;

var app = express();


app.get('/', function(req, res){

	res.send('Hello World')

});

app.listen(port);

console.log('listening on port' + port)





