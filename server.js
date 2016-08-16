var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');

var app = express();
var pokebo = require('./app/PokeBO');

app.use(bodyParser.json()); // for parsing application/json

//
app.use(express.static(__dirname + '/site'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/site/js'));
app.use(express.static(__dirname + '/site/css'));
//Store all JS and CSS in Scripts folder.

app.get('/messpokejs', function (req, res) {
	res.sendFile(path.join(__dirname + '/site/index.html'));
});

// routes:
var apiRouter = express.Router();

var resUtils = {
	sendError: function ( res, json ) {
		res.status(200)
			.json({
				error : json
			});
	},

	sendSuccess : function ( res, json) {
		res.status(200)
			.json({
				error : null,
				data : json
			});
	}
};

apiRouter.route('/login')
	.post(function (req, res) {
		var user = req.body;

		pokebo.login( user.username, user.password, user.type, user.location, function ( error, data ) {
			if ( error ) {
				console.log(error);
				resUtils.sendError(res, {message : 'error'});
				return;
			}

			resUtils.sendSuccess(res, data);
		});
	});

apiRouter.route('/profile')
	.post(function (req, res) {
		pokebo.getProfile(function ( error, profile ) {
			if ( error ) {
				console.log('/profile error = ', error);
				resUtils.sendError(res, {message : 'error'});
				return;
			}
			console.log('/profile = ', profile);

			resUtils.sendSuccess(res, profile);
		});
	});


apiRouter.route('/test')
	.post(function (req, res) {
		console.log('/test req = ', req.body);
		resUtils.sendSuccess(res, { message : req.body });
	});
apiRouter.route('/error')
	.post(function (req, res) {
		console.log('/error req = ', req.body);
		resUtils.sendError(res, { message : req.body });
	});

app.use('/api', apiRouter);

app.listen(3000, function () {
	console.log('messpokejs listening on port 3000!');
});
