'use strict'

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin.jade', { title: 'Add Item' });
});

module.exports = router;
