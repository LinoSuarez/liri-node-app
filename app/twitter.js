var twitterKeys = require("./keys.js");
var twitter = require('twitter');

var client = new twitter(twitterKeys);


function getLatestTweets(){
    var params = {screen_name: 'nodegnome',
    count: 20};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
     if (!error) {
        console.log();
        console.log("This are your latest 20 Tweets:")
        var arr = tweets.map(function(a, b){
             console.log("     Tweet " + (b + 1) + ": " + a.text)
        })
        console.log();
     }
    });
}
function printLatestTweets(){
    // getLatestTweets().forEach(function(tweets){
    //     cosnole.log(tweets)
    // })
    getLatestTweets()
}

module.exports = {printLatestTweets: printLatestTweets}