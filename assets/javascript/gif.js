$(document).on("click", "button", function() {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div class='animal'>");
        
        var p = $("<p>").text("Rating: " + results[i].rating);

        var animalImage = $("<img>");
      
        animalImage.attr("src", results[i].images.fixed_height_still.url);

        animalImage.attr("data-still", results[i].images.fixed_height_still.url)

        animalImage.attr("data-animate", results[i].images.fixed_height.url)

        .attr("data-state", "still").addClass("gif");

        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifs-appear-here").prepend(animalDiv);
      }

    });
  });

  $(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");

    if(state === "still"){
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
});


$("#add-animal").on("click", function(event) {
    event.preventDefault();
        
    var animal = $("#animal-input").val().trim();
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        
      console.log(response);

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div class='animal'>");
        
        var p = $("<p>").text("Rating: " + results[i].rating);

        var animalImage = $("<img>");
      
        animalImage.attr("src", results[i].images.fixed_height_still.url);

        animalImage.attr("data-still", results[i].images.fixed_height_still.url)

        animalImage.attr("data-animate", results[i].images.fixed_height.url)

        .attr("data-state", "still").addClass("gif");

        animalDiv.append(p);
        animalDiv.append(animalImage);

        $("#gifs-appear-here").prepend(animalDiv);
      }

    // results.push(animal);

    var a = $("<button>");

    a.attr("data-animal", animal);

    a.text(animal);

    $(".col-md-8").append(a);

    })
});