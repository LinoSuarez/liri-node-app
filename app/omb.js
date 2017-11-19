var request = require('request');


function movieInfo(name){
    if (!name){
        name = "Mr. Nobody"
    }
    var URL = "http://www.omdbapi.com/?t=" + name + "&apikey=4929b2c1";
    var title = "";
    var year = "";
    var IMDBRating = "";
    var rotten_tomatoes = "";
    var country = "";
    var language = "";
    var plot = "";
    var actors = "";
    
    request(URL, function (error, response, body) {
        body = JSON.parse(body);

        try {
            title = body.Title;
        } catch(err){
            title = "N/A";
        }
        try {
            year = body.Year;
        } catch(err){
            year = "N/A";
        }
        try {
            IMDBRating = body.imdbRating ;
        } catch(err){
            IMDBRating = "N/A";
        }
        try {
            rotten_tomatoes = body.Ratings[1].Value;
        } catch(err){
            rotten_tomatoes = "N/A";
        }
        try {
            country = body.Country;
        } catch(err){
            country = "N/A";
        }
        try {
            language = body.Language;
        } catch(err){
            language = "N/A";
        }
        try {
            plot = body.Plot;
        } catch(err){
            plot = "N/A";
        }
        try {
            actors = body.Actors;
        } catch(err){
            actors = "N/A";
        }
       // console.log(JSON.parse(body, null, 7)); // Print the HTML for the Google homepage.
        console.log();
        console.log("Movie Information");
        console.log("     Title:", title);
        console.log("     Year:", year);
        console.log("     IMDBRating:", IMDBRating);
        console.log("     Rotten Tomatoes:", rotten_tomatoes);
        console.log("     Country:", country);
        console.log("     Language:", language);
        console.log("     Plot:", plot);
        console.log("     Actors:", actors);
        console.log();
    });
}


module.exports = {movieInfo: movieInfo}

// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.