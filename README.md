# GifTastic

**GiTastic** uses the Giphy API to download & display 10 gifs that correspond to the button the user selects. 

It also allows the user to select gifs, and the app then adds a new button to the screen corresponding to the user's selection.

The images are initially displayed as static images rather than gifs. When the user clicks on the image, it will switch to the animated gif, and switch back when the image is clicked again.

This project was a class exercise in JavaScript, jQuery, APIs, CSS, and HTML.

**GiTastic** was coded by me, and is maintained by me.

The deployed app can be found at https://dirk-kiesewetter.github.io/GifTastic/


_____________________________________________________________________________________________
**Technical details:**

**Problems:**
This project was to display images taken from the Giphy website, which, when clicked on, would alternatively animate and stop. The issue is that gifs do not have that capability.

**Solution:**
The app was coded so that, when a user clicks on an image, it will toggle between the static version of the gif and the animated version. This gives the appearance of pausing the gif, and overcomes the limitation of the gif.

**Technical Details:**
* AJAX was used for the API calls from the giphy website.
* for loops were used to loop through the array of prepopulated gif categories, and to loop through the JSON returned via the API.
* An if/else conditional was used to toggle between the static and animated images.
