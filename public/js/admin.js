'use strict'

$(document).ready(init);

var newItem;

function init() {
  $('#newEntry').click(addNewItem);
  console.log(this);
}

function addNewItem(event) {
event.preventDefault();

var name = $('#nameEntry').val();
var description = $('#descEntry').val();
var price = $('#priceEntry').val();
var img = $('#imgEntry').val();
var category = $('#catEntry').val();
console.log(name, description, price, img, category);

var newItem = ({name: name, description: description, price: price, img: img, category: category})
  console.log(newItem);
  $.post('/users', newItem, function(data) {
    location.replace('/');
  });
}
