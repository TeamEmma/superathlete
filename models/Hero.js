var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
  name:  String,
  image: String,
  sport: String,
  workouts: [{ type: Schema.Types.ObjectId, ref: 'Workout'}]
});

module.exports = mongoose.model('Hero', heroSchema);
