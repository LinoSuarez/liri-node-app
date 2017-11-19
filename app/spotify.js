var Spotify = require('node-spotify-api');

var spotify = new Spotify({
 id: '0e1fa7883e30436ca4b146f5ce3afc40',
 secret: 'adbc90447bbe42739ed0cacf29d0c22e'
});

function getTrackInfo(trackName){
    var artists = [];
    var songName = "";
    var preview_url = "";
    var album_name = "";

    //We limit the responce que to make it faster
    spotify.search({ limit: '1', type: 'track', query: trackName }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var arr = (data.tracks.items[0])

       //Pushing artists into artists array
       arr.artists.forEach(function(x){
           artists.push(x.name)
       })

       //Settin formatted song name
       songName = arr.name;

       //Settin preview URL
       preview_url = arr.preview_url;

       //Settin Album Name
       album_name = arr.album.name;


       //PRINTING 
       console.log()
       console.log("Displaying song info")
       //PRINTING ARTISTS
        if (artists.length === 1){
            console.log("     Artist: " + artists)
        } else if (artists.length > 1){
            var artistBuilder = "";
            for (var x = 0; x < artists.length; x++){
                if (x !== 0){
                    artistBuilder += (", " + artists[x]);
                } else {
                    artistBuilder += (artists[x])
                }
            }
            console.log("     Artists: " + artistBuilder)
        }

        //PRINTING ALL ELSE
        console.log("     Album Name: " + album_name)
        console.log("     Song Name: " + songName)
        console.log("     Preview URL: " + preview_url)
        console.log()

    // console.log(artists, songName, preview_url, album_name)
       // console.log(JSON.stringify(arr, null, 6))
       });
}


module.exports = {getTrackInfo : getTrackInfo}
// Artist(s)

// The song's name

// A preview link of the song from Spotify

// The album that the song is from