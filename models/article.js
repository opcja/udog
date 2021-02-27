const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {type: String, required: true}, // String is shorthand for {type: String}  
  description: {type: String, required: true}, 
  summary: {type: String, required: true}, 
  imagesURL: [{type: String}],
  videosURL: [{type: String}],
  author: {type: String},
  created: { type: Date, default: Date.now }, 
  id: {type: Number, require: true}
 });

module.exports = mongoose.model('article', articleSchema);