console.log("GifTastic app.js loaded")

var topics = [
    'spaceship', 'X-Wing', 'TIE fighter', 'Death Star', 'B-Wing', 'Star Destroyer', 'astronomy', 'jet'
]

// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + (#gif-input) + "&api_key=ZhBYk7Ogg5uqcY86VNUVcMn8UCUesZ9B&limit=10&rating=pg";

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

// Function for displaying movie data
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#gifButtons").empty();
    // Loops through the array of movies
    for (var i = 0; i < topics.length; i++) {

        // Then dynamicaly generates buttons for each movie in the array
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

function importGifs() {

}

renderButtons();