//get needed packages

var express = require('express') ;
var app = express(); //create new instance
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');  //used to create, sign, and verify tokens
var config = require ('./config'); // get our config file
var user = require('./app/models/user'); //get our mongoose model

//====================================
// configuration =====================
//====================================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(config.database); // connect to database
app.set('superSecret', config.secret);  //secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

//====================================
// routes ============================
//====================================
//basic route
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});

//====================================
// API routes ========================
//====================================


//====================================
// start server  =====================
//====================================
app.listen(port);
console.log('Yay server running, localhost:' + port);
