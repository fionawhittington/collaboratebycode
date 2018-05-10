console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var mongoose = require('mongoose')
var tweetModel = require('./app/models/tweet.js')
var params = { 
  q: 'collaborate',
  count: 10 
}

T.get('search/tweets', params, storeData);

function storeData(err, data, response) {
  //console.log(data);

  for (i = 0; i < data.statuses.length; i++) {
    //console.log(data.statuses[i].text)

    var oneTweet = new tweetModel
    oneTweet.text = data.statuses[i].text

    oneTweet.save(function(err) {
      if(err) console.log(err)
    })

  }
  //debug
  console.log('we store data')


}

//This function searches the tweets and returns results 

function searchData(name, callback) {
  console.log('searched the data')

  tweetModel.find({text: {"$regex": name, "$options":"i"}}, function(err, data){
    if (err) {callback(err)}
    callback(data)
  })
  //debug
}


//functions available to other files
module.exports = {
  searchData: searchData
};
