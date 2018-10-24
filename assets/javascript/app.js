console.log("GifTastic app.js loaded")

var gifView;
var staticGif;
var movingGif;
var dataState;

var topics = [
    'Battlestar Galactica', 'Star Wars', 'Star Trek', 'Peter Sellers', 'Stargate', 'galaxies', 'solar system', 'jet fighter'
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
        gifView = $("#gifs-view");
        // make this empty to wipe the screen
        $("#gifs-view").prepend(gifView);
        console.log("response is below");
        console.log(response);


        for (var i = 0; i < response.data.length; i++) {

            // varibles for static and moving gifs
            staticGif = response.data[i].images.fixed_height_still.url;
            movingGif = response.data[i].images.fixed_height.url;

            // Creates an element to hold the image, appends the image
            gifView.append($("<img>").attr("src", staticGif));

            // Retrieves the Rating Data and creates an element to have the rating displayed
            gifView.append($("<p>").text("Rating: " + response.data[i].rating));

        };
    });

}

function renderButtons() {

    // Deletes the gifs prior to adding new gifs
    $("#gifButtons").empty();
    // Loops through the array 
    for (var j = 0; j < topics.length; j++) {

        // dynamically generates buttons for each gif in the array
        var a = $("<button>");
        // Adds a class of gif to our button
        a.addClass("gif");
        // Added a data-attribute
        a.attr("data-name", topics[j]);
        // Provided the initial button text
        a.text(topics[j]);
        // Added the button to the gifButtons div
        $("#gifButtons").append(a);
    }
}

// This function handles events where the add gif button is clicked
$("#add-gif").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var gif = $("#gif-input").val().trim();

    // The gif from the textbox is then added to our array
    topics.push(gif);

    renderButtons();
});

//click event when a gif is clicked
$("#gifs-view").on("click", function () {

    

});

// Adding click event listeners to all elements with a class of "gif"
$(document).on("click", ".gif", displayGifInfo);

renderButtons();