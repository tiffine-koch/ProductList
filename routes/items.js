'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/items');
/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find({}, function(err, items) {
    console.log('err:', err);
    console.log('items:', items);
    res.send(item);
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

router.get('/:itemID', function(req,res) {

  Item.find({_id: req.params.itemID }, function(err, items) {
  console.log('items:', items);
  res.send(items);
  // Item.findOne({name: 'sleeping'}, function(err, item) { //gives the first matching one, singular not an array
  // Item.findByID({req.params.itemID}, function(err, item) {
  //   console.log('item:', item);
  //   res.send(item);
  });
});

module.exports = router;
