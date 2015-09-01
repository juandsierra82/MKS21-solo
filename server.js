var express = require('express'),
		mongoose = require('mongoose');

var port = 8080;

var app = express();

app.use(express.static(__dirname + '/'))

app.post('/index', function(req, res){
	console.log('hello')
	res.send('Hello World!')
})
app.listen(port);

console.log('listening on port' + port)





