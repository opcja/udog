const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const offerSchema = new Schema({
  title: {type: String, required: true}, // String is shorthand for {type: String}  
  description: {type: String, required: true}, 
  imageURL: {type: String, required: true},  
  id: {type: Number, require: true}
 });

module.exports = mongoose.model('offer', offerSchema);