const mongoose = require('mongoose')
const { Schema } = mongoose;

const goodSchema = new Schema({
  image: String, 
  name: String,
  description: String,
  price: Number
});

const modelGood = mongoose.model("Goods", goodSchema)

module.exports = modelGood