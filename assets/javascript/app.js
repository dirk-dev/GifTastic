$(document).ready(function () {


    var topics = [
        'Battlestar Galactica', 'Star Wars', 'Star Trek', 'Peter Sellers', 'Stargate', 'galaxies', 'solar system', 'TIE fighter', 'Guardians of the Galaxy'
    ]

    console.log("GifTastic app.js loaded")

    // Append Intial buttons
    renderButtons();

    $(document).on('click', '.gif_button', displayGif);


    $(document).on('click', '.gif_container', gifActive);

    // ===================================================================

    // Append gif Buttons to DOM
    function renderButtons() {

        // Deletes any previous button to prevent duplicates
        $('.gif_buttons').empty();

        // Loops through the array
        for (var i = 0; i < topics.length; i++) {

            // dynamicaly generate a button for each gif in the array 
            var gifButton = $('<button>')
            gifButton.addClass('gif_button'); // Added a class 
            gifButton.attr('data-name', topics[i]); // Added a data-attribute
            gifButton.text(topics[i]); // Provided the initial button text
            $('.gif_buttons').append(gifButton); // Added the button to the HTML
        }
    }

    // ===================================================================

    // Add new topics from the user input
    $('#add_gif').on('click', function () {

        // Grab the input from the textbox
        var newgif = $('#gif_input').val().trim().toLowerCase();

        // Add the new gif to the original list
        topics.push(newgif);

        // Add new buttons to the rendered HTML
        renderButtons();

    })

    // Get gifs via AJAX call, display in HTML when buttons is clicked
    function displayGif() {

        // Deletes old gifs
        $('#gif_images').empty();

        // Collect gif name data attribute from the button, replacing any spaces
        var gif = $(this).attr('data-name').replace(/ /g, '+');

        // Create the API URL
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=ZhBYk7Ogg5uqcY86VNUVcMn8UCUesZ9B&limit=10&rating=pg";
        // console.log(queryURL);


        // Creates AJAX call for the specific gif button being clicked
        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (response) {

            // Loop through the JSON to collect each gif
            for (var i = 0; i < response.data.length; i++) {

                // Collect the gif gif URLs
                var staticGif = response.data[i].images.fixed_height_still.url;
                var movingGif = response.data[i].images.fixed_height.url;

                // Collect the gif rating
                var giphyRating = response.data[i].rating;

                // Create a Div to house Gif and Rating
                var gifDiv = $('<div>');
                gifDiv.addClass('gif_container');
                gifDiv.attr('data-name', "unclicked");

                // Append Rating to current gif
                var gifRating = $('<h1>');
                gifRating.text("Rating: " + giphyRating);
                gifDiv.append(gifRating);

                // Append static gif
                var stillGif = $('<img>');
                stillGif.addClass('still_gif');
                stillGif.attr("src", staticGif);
                gifDiv.append(stillGif);

                // Append Moving Gif Image
                var currentGif = $('<img>')
                currentGif.addClass('moving_gif');
                currentGif.attr("src", movingGif);
                currentGif.hide();
                gifDiv.append(currentGif);

                $('#gif_images').append(gifDiv);

            }

        });
    }

    // toggles between static and moving gifs
    function gifActive() {

        // determine in the gif was already clicked
        var isClicked = $(this).attr('data-name');

        // if gif is not clicked yet - Hide the static gif & display the moving gif
        if (isClicked == "unclicked") {

            var gifChildren = $(this).children();

            // hide static gif
            $(gifChildren[1]).hide();

            // display moving gif
            $(gifChildren[2]).show();

            $(this).attr('data-name', "clicked");

        }
        // gif was clicked - Hide the moving gif & display the static gif
        else {

            var gifChildren = $(this).children();

            // hide moving gif
            $(gifChildren[2]).hide();

            // display static gif
            $(gifChildren[1]).show();

            $(this).attr('data-name', "unclicked");

        }

    }

});