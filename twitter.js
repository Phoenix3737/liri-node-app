var Twitter = require("twitter");
var keys = require('./keys');
var client = new Twitter(keys.twitter);

var params = {
    screen_name: 'TempName77777',
    count: 20
};

module.exports = function() {
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (error) {
            console.log(error);
        }
        else{
            tweets.forEach(function(tweet){
                console.log(tweet.text);
            })
        }
    });
}
