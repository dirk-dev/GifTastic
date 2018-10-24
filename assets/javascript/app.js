console.log("GifTastic app.js loaded")

var topics = [
    'spaceship', 'Star Wars', 'Star Trek', 'Death Star', 'Stargate', 'Star Destroyer', 'astronomy', 'warbird'
]

function displayGifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=ZhBYk7Ogg5uqcY86VNUVcMn8UCUesZ9B&limit=10&rating=pg";
    console.log("var gif " + gif);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Creates a div to hold the gif
        var gifView = $("#gifs-view");
        // make this empty to wipe the screen
        $("#gifs-view").prepend(gifView);
        console.log("response is below");
        console.log(response);

        /////??????????????
        var rating = response.data.rating;


        for (var i = 0; i <response.data.length; i++) {
        // Retrieves the Rating Data and creates an element to have the rating displayed
        gifView.append($("<p>").text("Rating: " + response.data[i].rating));

        // Creates an element to hold the image
        // Appends the image
        ////////////// - this needs to be about the gif, not the poster!!!
        gifView.append($("<img>").attr("src", response.data[i].images.fixed_height_still.url));

        };

        // Puts the entire Movie above the previous movies.
    });

}

function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gifButtons").empty();
    // Loops through the array 
    for (var j = 0; j < topics.length; j++) {

        // Then dynamically generates buttons for each movie in the array
        var a = $("<button>");
        // Adds a class of movie to our button
        a.addClass("gif");
        // Added a data-attribute
        a.attr("data-name", topics[j]);
        // Provided the initial button text
        a.text(topics[j]);
        // Added the button to the gifButtons div
        $("#gifButtons").append(a);
    }
}


// This function handles events where the add movie button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var gif = $("#gif-input").val().trim();

    // The movie from the textbox is then added to our array
    topics.push(gif);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

// Adding click event listeners to all elements with a class of "gif"
$(document).on("click", ".gif", displayGifInfo);

renderButtons();