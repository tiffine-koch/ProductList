'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/items');

router.get('/', function(req, res, next) {
  Item.find({}, function(err, items) {

    console.log('err:', err);
    console.log('items:', items);
    res.send(items);
  });
});

router.get('/:itemID', function(req,res) {

  Item.find({_id: req.params.itemID }, function(err, items) {
  console.log('items:', items);
  res.send(items);
  });
});

router.post('/', function(req, res) {
  var item = new Item(req.body);
  console.log(item);
  item.save(function(err, savedItem) {
    console.log('savedItem:', savedItem);
    res.send(savedItem);
  });
});

module.exports = router;
