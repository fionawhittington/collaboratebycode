var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shapeSchema = new Schema({
  q1: String,
  q2: String,
  q3: String
});

module.exports = mongoose.model('shape', shapeSchema, 'shapes');