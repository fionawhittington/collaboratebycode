var Twit = require('twit');
var config = require('./config')
var mongoose = require('mongoose')
var tweetModel = require('./models/tweet.js')
var T = new Twit(config);

var params = { 
  q: 'collaborate',
  count: 10 
}

// Uncomment to actively search Twitter
// T.get('search/tweets', params, storeData);

function storeData(err, data, response) {
  for (i = 0; i < data.statuses.length; i++) {
    var oneTweet = new tweetModel
    oneTweet.text = data.statuses[i].text

    oneTweet.save(function(err) {
      if(err) console.log(err)
    })

  }
}

//This function searches the tweets and returns results 
function searchData(name, callback) {
  tweetModel.find({text: {"$regex": name, "$options":"i"}}, function(err, data){
    if (err) {
      callback(err) 
    } else {
      callback(data)
    }
  });
}

//functions available to other files
module.exports = {
  searchData: searchData
};
