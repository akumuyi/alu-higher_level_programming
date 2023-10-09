#!/usr/bin/node
// Make an ajax request to fetch the movie titles
$.ajax({
    url: "https://swapi-api.alx-tools.com/api/films/?format=json",
    success: function(response) {
      // Get the list of movie titles
      const movieTitles = response.results.map(movie => movie.title);
  
      // Append each movie title to the UL#list_movies element
      movieTitles.forEach(title => {
        $('#list_movies').append($('<li>' + title + '</li>'));
      });
    }
  });