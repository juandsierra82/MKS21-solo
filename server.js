var express = require('express'),
		mongoose = require('mongoose');

var port = 8080;

var app = express();

app.use(express.static(__dirname + '/'))

app.post('/', function(req, res){
	res.send('Hello World')
	console.log('Server pinged')
})
app.listen(port);

console.log('listening on port' + port)





