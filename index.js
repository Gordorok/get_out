const express = require('express'),
app = express(),
port = process.env.PORT || 3000;

app.listen(port);
console.log('API server started on: ' + port);

var appRoutes = require('./app/routes/appRoutes'); //importing route
appRoutes(app); //register the route