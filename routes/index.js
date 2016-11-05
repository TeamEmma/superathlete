var express = require('express');
var router = express.Router();
// var passport = require('passport');
// var User = require('../models/User');

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});
