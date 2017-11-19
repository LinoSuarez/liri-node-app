var twitter = require("./app/twitter.js");
var spotify = require("./app/spotify.js");
var omb = require("./app/omb.js");
var fs = require("./app/fs.js");

var command = process.argv[2];
var args = process.argv;
args.splice(0,3);
args = args.join(" ");


switch(command) {
    case "my-tweets":
        //CODE
        twitter.printLatestTweets()
        fs.writeLog(command + "\r\n")
        break;
    case "spotify-this-song":
        //CODE
        if (!args) {
            console.log("Command not supported")
            break;
        }
        spotify.getTrackInfo(args)
        fs.writeLog(command + " " + args + "\r\n");
        break;
    case "movie-this":
        omb.movieInfo(args);
        fs.writeLog(command + " " + args + "\r\n")
        //CODE
        break;
    case "do-what-it-says":
        fs.readRandom();
        fs.writeLog(command)
        //CODE
        break;
    default:
        console.log()
        console.log("Commands:", "my-tweets,", "spotify-this-song <song>,", "movie-this <movie>,", "do-what-it-says");
        console.log()
}