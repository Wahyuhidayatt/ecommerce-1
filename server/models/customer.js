'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

let schemaCustomer = Schema({
  id : String,
  name : String,
  email : String
})

let Customer = Mongoose.model('Customer', schemaCustomer)

module.exports = Customer
