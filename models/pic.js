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

module.exports.allPics = function(query, callback) {
  Pic.find(query, callback);
};

module.exports.deletePic = function(id, callback) {
  Pic.findByIdAndRemove(id, callback);
};
