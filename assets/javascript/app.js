console.log("GifTastic app.js loaded")

var topics = [
    'spaceship', 'Star Wars', 'Star Trek', 'Death Star', 'Stargate', 'Star Destroyer', 'astronomy', 'warbird'
]

// xhr.done(function (data) {
//     console.log("success got data", data);
// });
// My API key is:   ZhBYk7Ogg5uqcY86VNUVcMn8UCUesZ9B

//CODE FROM GIPHY:

// Gif Search
// client.search('gifs', {"q": "cats"})
//   .then((response) => {
//     response.data.forEach((gifObject) => {
//       console.log(gifObject)
//     })
//   })
//   .catch((err) => {

//   })


// var gif = $(this).attr();

function displayGifInfo() {

    var gif = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + "#gif-input" + "&api_key=ZhBYk7Ogg5uqcY86VNUVcMn8UCUesZ9B&limit=10&rating=pg";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Creates a div to hold the gif
        var gifView = $("#gif-view");
        // make this empty to wipe the screen
        $("#gif-view").prepend(gifView);
        console.log(response);
        var rating = response.Rated;
        // Retrieves the Rating Data and creates an element to have the rating displayed
        gifView.append($("<p>").text("Rating: " + rating));
        
        // Creates an element to hold the image
        // Appends the image
        gifView.append($("<img>").attr("src", response.Poster));

        // Puts the entire Movie above the previous movies.
    });

}

// Function for displaying data
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gifButtons").empty();
    // Loops through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamically generates buttons for each movie in the array
        //This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>");
        // Adds a class of movie to our button
        a.addClass("gif");
        // Added a data-attribute
        a.attr("data-name", topics[i]);
        // Provided the initial button text
        a.text(topics[i]);
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

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".gif", displayGifInfo);



renderButtons();