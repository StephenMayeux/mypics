var express = require('express');
var router = express.Router();
var passport = require('passport');
var TwitterStrategy  = require('passport-twitter').Strategy;
var User       = require('../models/user');

/* GET users listing. */
router.get('/myprofile', ensureAuthenticated, function(req, res, next) {
  console.log(req.user);
  res.render('myprofile', {user: req.user.twitter});
});

/* Passport function for access control. */
function ensureAuthenticated(req, res, next) {
  if(req.isAuthenticated()) {
    return next();
  }
 res.send('You need to log in!!!');
}

module.exports = router;
