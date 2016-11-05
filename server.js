var express = require('express');
// var mongoose = require('mongoose');

//require in user model and passport. still need to add facebook
// var User = require('./models/User');
// var passport = require('passport');

var app = express();
var router = express.Router();
var config = require('./config');

app.set('port', config.port);

app.use(express.static(__dirname + '/www'));

//use facebook passport strategy. add in express-session, not sure if we need it yet
// var FacebookStrategy = require('passport-facebook').Strategy;
// var session = require('express-session');
//
// app.use(express.static(__dirname + '/www'));

//Set up Passport - Facebook
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect(config.dbURI);
// console.log(config.dbURI);

app.use('/', router);

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.listen(config.port, function() {
  console.log('Express server listening on port', config.port);
});
