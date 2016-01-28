'use strict'

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/items')

router.get('/', function(req, res, next) {
  res.render('admin.jade', { title: 'Add Item' });
});

//post new item
router.post('/', function(req, res) {
  var item = new Item(req.body);
  console.log(item);

  item.save(function(err, newItem) {
    if (err) return res.status(400).send(err);
    console.log('savedItem:', newItem);
    res.send(newItem);
  });
});

module.exports = router;
