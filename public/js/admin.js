'use strict'

$(document).ready(init);

var newItem;
var itemArray = [];

function init() {
  $('#newEntry').click(addNewItem);
  $('#catDropDown').on('change', findCat);
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

newItem = ({
  name: name,
  description: description,
  price: price,
  img: img,
  category: category});

  console.log(newItem);

  $.post('/admin', newItem, function(data) {
    location.href = '/';
  });
}
function findCat(event) {
  event.preventDefault();
  var text = $(this).text();
  $('#catEntry').text(text).append('<span class="caret"></span>');
  console.log(text);
}
