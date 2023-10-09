// Select the header element using jQuery
const header = $('header');

// Select the DIV#red_header element using jQuery
const redHeaderDiv = $('#red_header');

// Attach a click event listener to the DIV#red_header element
redHeaderDiv.on('click', function() {
  // Set the text color of the header element to red
  header.css('color', '#FF0000');
});
