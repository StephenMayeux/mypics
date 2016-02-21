var mongoose = require('mongoose');

var PicSchema = mongoose.Schema({
  user: String,
  url: String,
  title: String
});

var Pic = module.exports = mongoose.model('Pic', PicSchema);

module.exports.savePic = function(newPic, callback) {
  newPic.save(callback);
};
