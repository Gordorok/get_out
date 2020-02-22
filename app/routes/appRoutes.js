const http = require('http');
const sql = require('./db.js');
const query = require('./query.js');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send('Vous êtes à l\'accueil');
	});
	app.get('/map', function(req, res) {
		res.setHeader('Content-Type', 'text/html');
		res.render(__dirname + '/map');

	});
	app.post('/addZ', function(req, res) {
		sql.query("INSERT INTO pos_zombie (ID, latitudeZ, longitudeZ, time) value ( NULL, '"+req.body.lat+"','"+req.body.long+"', CURRENT_TIMESTAMP)");
		console.log(req.body);
	});

	app.post('/addH', function(req, res) {
		sql.query("INSERT INTO pos_human (ID, latitudeH, longitudeH, time, username) value ( NULL, '"+req.body.lat+"','"+req.body.long+"', CURRENT_TIMESTAMP, NULL)");
		console.log(req.body);
	});

	app.get('/getPos', function(req,res) {
		query.posZ()
		.then((data) =>{
			data.forEach((zom) =>{
				console.log(zom.latitude)
			})
			res.send(data)
		})
	})


};