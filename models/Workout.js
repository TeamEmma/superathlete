var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var workoutSchema = new Schema({
  name:  String,
  level: String,
  points: Number,
  video_url: String,
  _hero: {type: Number, ref: 'Hero'}
});

module.exports = mongoose.model('Workout', workoutSchema);
