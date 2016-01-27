'use strict';

var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  name: {type: String},
  description: {type: String},
  price: {type: Number},
  image: {type: String}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;

//with this model, we can do Item.find()
