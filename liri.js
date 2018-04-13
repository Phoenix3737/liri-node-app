require("dotenv").config();

const myTweets = require("./twitter");
const spotify = require('./spotify');

const command = process.argv[2];

if (command === 'my-tweets') {
    myTweets();
}
else if (command === 'spotify-this-song') {
  spotify(process.argv[3]);  
}
