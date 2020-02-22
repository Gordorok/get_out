const express = require('express'),
app = express(),
bodyParser = require('body-parser');
port = process.env.PORT || 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);
console.log('API server started on: ' + port);

var appRoutes = require('./app/routes/appRoutes'); //importing route
appRoutes(app); //register the route