const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
app.set('view engine', 'ejs'),
server = require('http').createServer(app),
io = require('socket.io').listen(server),
ent = require('ent');

// Chargement de la page index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('nouveau_client', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('nouveau_client', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

server.listen(port);
//app.listen(port);
console.log('API server started on: ' + port);

var appRoutes = require('./app/routes/appRoutes'); //importing route
appRoutes(app); //register the route