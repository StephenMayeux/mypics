var express = require('express');
var router = express.Router();
var Pic = require('../models/pic');

router.post('/addpic', function(req, res, next) {
  var newPic = new Pic ({
    user: req.user.twitter.username,
    url: req.body.url,
    title: req.body.title
  });

  Pic.savePic(newPic, function(err, data) {
    if (err) throw err;
    res.redirect('/users/myprofile');
  });

});

module.exports = router;
