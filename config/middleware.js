var morgan 			= require('morgan'),
		bodyParser 	= require('body-parser'),
		helpers			= require('./helpers.js');

module.exports = function(app, express){

	var searchRouter = express.Router();

	app.use(morgan('dev'));
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname+ '/client'));
	app.use('api/searches', searchRouter);


};