#!/usr/bin/node
// Select the DIV#update_header element using jQuery
const updateHeaderDiv = $('#update_header');

// Select the header element using jQuery
const header = $('header');

// Attach a click event listener to the DIV#update_header element
updateHeaderDiv.on('click', function() {
  // Set the text of the header element to New Header!!!
  header.text('New Header!!!');
});