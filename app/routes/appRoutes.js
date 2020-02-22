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
		sql.query("INSERT INTO pos_zombie (ID, latitude, longitude, time) value ( NULL, '"+req.body.lat+"','"+req.body.long+"', CURRENT_TIMESTAMP)");
		console.log(req.body);
	});
};