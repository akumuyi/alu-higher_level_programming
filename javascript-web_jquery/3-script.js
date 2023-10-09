#!/usr/bin/node
// Select the header element using jQuery
const header = $('header');

// Select the DIV#red_header element using jQuery
const redHeaderDiv = $('#red_header');

// Attach a click event listener to the DIV#red_header element
redHeaderDiv.on('click', function() {
  // Add the class `red` to the header element
  header.addClass('red');
});
