const http = require('http');
const sql = require('./db.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send('Vous êtes à l\'accueil');
	});
	app.get('/map', function(req, res) {
		res.setHeader('Content-Type', 'text/html');
		res.render(__dirname + '/map', {Geo: 'LOL'});
	});
	app.post('/add', function(req, res) {
		console.log(req.body);
	});
};