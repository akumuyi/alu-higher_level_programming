#!/usr/bin/node
$(document).ready(function() {
    // Send an HTTP GET request to the API URL
    $.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
      // Extract the character name from the response data
      var characterName = data.name;
      
      // Update the content of the DIV#character with the character name
      $('#character').text(characterName);
    });
  });