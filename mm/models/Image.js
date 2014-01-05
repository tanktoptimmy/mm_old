var Mongoose = require('mongoose');

exports.ImageSchema = new Mongoose.Schema({
  title : { type: String, required : 'Name is required!' },
  tag: {type: String},
  url: {type: String},
});