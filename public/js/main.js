'use strict'

$(document).ready(init);

var itemArray = [];

function init() {
  // updateList();
  // $('#cart').click(clickedItem);
  $('#trash').click(deleteItem);
  console.log(this);
}

// function clickedItem(event) {
//   event.preventDefault();
//   var grabItem = $('#cart').val();
// }

// function updateList() {
// // var storedItem = {
// //   name: name,
// //   description: description,
// //   price: price,
// //   img: img,
// //   category: category};
// //   console.log(storedItem);
//   $.post('/', item, function(data) {
//     location.replace('/');
//     // location.href = '/';
//   }).fail(function(err) {
//       alert('fix me',err);
//   });
// }


//
// function appendList() {
//   var itemList = $('#itemList');
//   addItem.children().not('#template').remove();
//   // addItem.children().('#template').remove();
//
//   var $items = itemArray.map(function(item, index) {
//     var $tr = $('#template').clone();
//     $tr.removeAttr('id');
//     $tr.children('.name').text(item.name);
//     $tr.children('.desc').text(item.description);
//     $tr.children('.price').text(item.price);
//     $tr.children('.img').text(item.img);
//     $tr.children('.category').text(item.category);
//     return $tr
//     });
//   itemList.append($items);
// }
//
function deleteItem() {
    var itemID = $(this).closest('tr').data('_id');
    var thisItem = $(this).closest('tr').remove();

    $.ajax({
      url: `/items/delete/${id}`,
      type: `DELETE`,
      success: function(data) {
        location.replace('/');
      }
    })
  }
// function findCat(event) {
//   event.preventDefault();
//   var text = $(this).text();
//   $('#catEntry').text(text).append('<span class="caret"></span>');
//   console.log(text);
// }
