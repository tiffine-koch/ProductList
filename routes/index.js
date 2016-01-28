var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = require('../models/items');

//get items, render index page
router.get('/', function(req, res, next) {
  Item.find({}, function(err, items) {
    if (err) return res.status(400).send(err);
    // res.send(items);
    res.render('index', {items});
  });
});

//get item data
router.get('/:itemID', function(req,res) {
  Item.find({_id: req.params.itemID }, function(err, item) {
    if (err) return res.status(400).send(err);
    res.send({item: item});
  });
});

// update item
// router.put('/edit/:itemID/', function(req, res){
//   Item.findById(req.params.itemID, function(err, item){
//     if (err) return res.status(400).send(err);
//
//     name: req.body.name;
//     description: req.body.description;
//     price: req.body.price;
//     img: req.body.img;
//     category: req.body.category;
//
//     item.save(function(err, editItem){
//       if (err) return res.status(400).send(err);
//       res.send(editItem);
//     });
//   });
// });

//delete item
router.delete('/:itemID', function(req, res){
  Item.find({_id: req.params.itemID}, function(err, item){
    item.remove(function(err){
      if (err) return res.status(400).send(err);
      res.send(null);
    });
  });
});
module.exports = router;
