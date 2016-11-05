var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:  String,
  soccer_points: Number,
  basketball_points: Number,
  tennis_points: Number,
  bonus_points: Number,
  _hero: {type: Number, ref: 'Hero'}
});

module.exports = mongoose.model('User', userSchema);
