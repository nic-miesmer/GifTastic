

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



