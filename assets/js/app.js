

var cats = ["black cats", "orange cats", "fat cats", "scottish folds", "lazy cats"]


var displayButtons = function() {
    // empty the div of buttons so when we add more,
    // it doesn't just add all of them again, and the new one.
    $("#gif-buttons").empty();

    //display buttons to page
    for(var i = 0; i < cats.length; i++){
        console.log("adding: " + cats[i] + " button")
        $("#gif-buttons").append("<button data-cat='" + cats[i] + "'>" + cats[i] + "</button>");
    }

}

displayButtons();


//click a button to get still gifs
$("button").on("click", function() {
    var cat = $(this).attr("data-cat");
    var apiKey= "MNnIOkvCzoC20UGpgg9R1SmGixjSCZd2"
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    cat + "&api_key="+ apiKey + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        var results = response.data;
        $("#cat-gifs").empty();
        for (var i = 0; i < results.length; i++) {
            var catsDiv = $("<div>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var catImgage = $("<img>");

            catImgage.attr("src", results[i].images.original_still.url);
            catImgage.attr("data-still", results[i].images.original_still.url);
            catImgage.attr("data-animate", results[i].images.original.url);
            catImgage.attr("data-state", "still");
            catImgage.attr("class", "gif");
            catsDiv.append(p);
            catsDiv.append(catImgage);
            $("#cat-gifs").append(catsDiv);
        }
    });
});

// MNnIOkvCzoC20UGpgg9R1SmGixjSCZd2