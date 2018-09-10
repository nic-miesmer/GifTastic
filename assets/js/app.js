$(document).ready(function () {


var cats = ["black cats", "orange cats", "fat cats", "scottish folds", "lazy cats"]



var displayButtons = function displayButtons() {
    // empty the div of buttons so when we add more,
    // it doesn't just add all of them again, and the new one.
    $("#gif-buttons").empty();
    //display buttons to page
    for(var i = 0; i < cats.length; i++){
        console.log("adding: " + cats[i] + " button")
        $("#gif-buttons").append("<button data-cat='" + cats[i] + "'>" + cats[i] + "</button>");
    }

}




//////////Script///////
displayButtons();






//Click Events//////

//click a button to get still gifs
$("button").on("click", function() {
    var cat = $(this).attr("data-cat");
    var apiKey= "MNnIOkvCzoC20UGpgg9R1SmGixjSCZd2"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    cat + "&api_key="+ apiKey + "&limit=10";

    $.get(queryURL).done(function (response) {
        var results = response.data;
        $("#cat-gifs").empty();
        for (var i = 0; i < results.length; i++) {
            var catsDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var catGif = $("<img>");

            catGif.attr("src", results[i].images.original_still.url);
            catGif.attr("data-still", results[i].images.original_still.url);
            catGif.attr("data-animate", results[i].images.original.url);
            catGif.attr("data-state", "still");
            catGif.attr("class", "gif");
            catsDiv.append(p);
            catsDiv.append(catGif);
            $("#cat-gifs").append(catsDiv);
        }
    })
})



$(document).on("click", ".gif", function() {
    console.log("clicked gif")
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  })





})
