const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FoodBankSchema = new Schema({
  name: {type: String},
  address: {type: String},
  latitude: {type: Number},
  longitude: {type: Number}
})

module.exports = mongoose.model('FoodBank', FoodBankSchema)
