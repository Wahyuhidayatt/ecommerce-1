'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaItems = new Schema({
  name : String,
  description : String,
  imageUrl : String,
  category : String,
  price : Number,
  stock : Number
},{
  timestamps: true
})

let Item = Mongoose.model('Item', schemaBooks)

module.exports = Item
