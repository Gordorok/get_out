
module.exports = function(app) {
	app.get('/', function(req, res) {
		res.setHeader('Content-Type', 'text/plain');
		res.send('Vous êtes à l\'accueil');
	});
};