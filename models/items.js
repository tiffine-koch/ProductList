'use strict';

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: {type: String},
  description: {type: String},
  price: {type: Number},
  image: {type: String},
  category: {type: String}
  // name: {type: String, required: true},
  // description: {type: String, required: true},
  // price: {type: Number, required: true},
  // image: {type: String, required: true},
  // category: {type: String, required: true},
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
