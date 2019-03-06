// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
  var input = "https://api.giphy.com/v1/gifs/search?q=" + $("#search-term").val() + "&rating=" + $("#search-age-rating").val() + "&api_key=dc6zaTOxFJmzC&limit=" + $("#search-limit").val();
  $.ajax({
    url: input,
    method: "GET",
    success: function(response) {
      $(".text-center").html("");
      var gifs = Math.floor(Math.random() * response.data.length);
      $(".text-center").append("<img class='text-center' src='" + response.data[gifs].images.original.url + "'>");
  },
});
  
  
});

