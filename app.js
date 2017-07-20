var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var myRouter = require ('./routes.js');
var carRouter = require('./carRoutes.js');

app.use('/api', myRouter);


app.use('/cars', carRouter);



app.listen(port);
