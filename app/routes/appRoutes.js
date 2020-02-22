const http = require('http');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send('Vous êtes à l\'accueil');
	});
	app.get('/map', function(req, res) {
		res.setHeader('Content-Type', 'text/html');
		res.render(__dirname + '/map', {Geo: 'LOL'});
	});
};