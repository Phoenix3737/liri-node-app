var Spotify = require('node-spotify-api');

var keys = require('./keys')

var spotify = new Spotify(keys.spotify);



module.exports = function (query) {
    spotify.search({
        type: 'track',
        query: query
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var song = data.tracks.items[0];
        if (song) {
            console.log(song.artists && song.artists[0].name);
            console.log(song.name);
            console.log(song.album.name);
            console.log(song.preview_url && song.preview_url);
        }
    });

}