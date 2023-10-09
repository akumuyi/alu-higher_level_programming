$(document).ready(function() {
    // Send an HTTP GET request to the API URL
    $.get('https://fourtonfish.com/hellosalut/?lang=fr', function(data) {
      // Extract the translation of "hello" from the response data
      var helloTranslation = data.hello;
      
      // Update the content of the DIV#hello with the translation
      $('#hello').text(helloTranslation);
    });
  });
  