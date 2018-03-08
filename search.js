console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);
var mongoose = require('mongoose')
var tweetModel = require('./app/models/tweet.js')
var params = { 
  q: 'collaborate',
  count: 100 
}

T.get('search/tweets', params, searchedData);

function searchedData(err, data, response) {
  //console.log(data);

  //for (i = 0; i < data.statuses.length; i++) {
    console.log(data.statuses[0].text)

    var oneTweet = new tweetModel
    oneTweet.text = data.statuses[0].text

    oneTweet.save(function(err) {
      if(err) console.log(err)
    })

    // tweetModel.create({
    //   text: data.statuses[0].text
    // }, function(err, data){
    //   if (err) {
    //     console.log(err)
    //   }
    //   console.log(data.text)
    // });

  //}
}

module.exports = {
  searchedData: searchedData
};
