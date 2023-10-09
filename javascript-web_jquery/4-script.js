#!/usr/bin/node
// Select the header element using jQuery
const header = $('header');

// Select the DIV#toggle_header element using jQuery
const toggleHeaderDiv = $('#toggle_header');

// Attach a click event listener to the DIV#toggle_header element
toggleHeaderDiv.on('click', function() {
  // Get the current class of the header element
  const currentClass = header.attr('class');

  // If the current class is red, remove the red class and add the green class
  if (currentClass === 'red') {
    header.removeClass('red');
    header.addClass('green');
  }

  // Otherwise, if the current class is green, remove the green class and add the red class
  else if (currentClass === 'green') {
    header.removeClass('green');
    header.addClass('red');
  }
});