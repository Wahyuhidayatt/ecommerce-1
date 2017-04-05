var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');


var items = require('./routes/items');
var customers = require('./routes/customers')
var transactions = require('./routes/transactions')
// var votes = require('./routes/votes')
// var logins = require('./routes/logins')

var app = express();

app.use(logger('dev'))
mongoose.promise = global.promise
mongoose.connect('mongodb://localhost/ecommerce');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3000)

app.use('/api/items', items)
app.use('/api/customers', customers);
app.use('/api/transactions', transactions);

module.exports = app
