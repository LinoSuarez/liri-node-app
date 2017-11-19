var fs = require('fs')
var twitter = require("./twitter.js");
var spotify = require("./spotify.js");
var omb = require("./omb.js");

function readRandom(){
    fs.readFile('./random.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var data = data.split(" ");
        var command = data[0];
        if (data.length > 1){
          data.splice(0,1);
          data = data.join(" ");
        } else {
            data = "";
        }
      
        console.log("Running Command:", command, data)
      
        switch(command) {
          case "my-tweets":
              //CODE
              twitter.printLatestTweets()
              break;
          case "spotify-this-song":
              //CODE
              if (!data){
                  console.log("This command is not supported");
                  break;
              }
              spotify.getTrackInfo(data)
              
              break;
          case "movie-this":
              omb.movieInfo(data);
              //CODE
              break;
          default:
              console.log()
              console.log("Commands:", "my-tweets,", "spotify-this-song <song>,", "movie-this <movie>,", "do-what-it-says");
              console.log()
      }
      //   console.log(data);
      });
}
function writeLog(log){
    fs.appendFile('log.txt', log, (err) => {
        if (err) throw err;
      });
}

module.exports = {readRandom: readRandom, writeLog: writeLog}