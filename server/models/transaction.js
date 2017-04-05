'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

var shcemaTransactions = new Schema({
  memberId:{
    type: Schema.Types.ObjectId,
    ref: "Customer"
  },
  totalPrice:Number,
  cart:[{
    type: Schema.Types.ObjectId,
    ref: "Item"
  }],
  jumlahBeli:[],
  Total:[]
},{
  timestamps: true
});

let Transaction = Mongoose.model('Transaction', schemaTransaction)

module.exports = Transaction
