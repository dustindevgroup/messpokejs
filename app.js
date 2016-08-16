var express = require('express');
var path    = require("path");

var app = express();
var pokebo = require('./app/PokeBO');

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

apiRouter.route('/login')
	.post(function (req, res) {
		console.log('/login req = ', req.body);
		res.status(200)
			.json( { message : 'req = ' + JSON.stringify( req.body ) });
	});

apiRouter.route('/test')
	.get(function (req, res) {
		console.log('/test req = ', req.body);
		res.send('req = ', req);
	});

app.use('/api', apiRouter);

app.listen(3000, function () {
	console.log('messpokejs listening on port 3000!');
});
