var Mongoose = require('mongoose');

exports.PlayerSchema = new Mongoose.Schema({
  goalieImg : [ImageSchema],
  outFieldImg :  [ImageSchema],
  name : { type : String, uppercase: true, required : 'Player name is required!' }
});