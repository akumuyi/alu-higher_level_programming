#!/usr/bin/node
// Select the DIV#add_item element using jQuery
const addItemDiv = $('#add_item');

// Select the UL.my_list element using jQuery
const myListUl = $('.my_list');

// Attach a click event listener to the DIV#add_item element
addItemDiv.on('click', function() {
  // Create a new `<li>` element
  const newLiElement = $('<li>Item</li>');

  // Append the new `<li>` element to the UL.my_list element
  myListUl.append(newLiElement);
});