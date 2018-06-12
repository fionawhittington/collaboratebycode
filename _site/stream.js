console.log("Example is up now..")
var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);

function followed(eventMsg) {
	console.log('Follow event');
	var name = eventMsg.source.name;
	var screenName = eventMsg.source.screen_name;
	tweetMessage('@'+screenName+ " Thank you for following me!")
}

function tweetMessage(txt) { 
	var tweet = {
		 status: txt 
	}

	T.post('statuses/update', tweet, tweeted)
}

function tweeted(err, data, response) {
	if(err) {
		console.log("Something went wrong in our stream function!", err);
	}
	else{
		console.log("Voila It worked!");
	}
}

module.exports = {
	followed: followed
};

module.exports = {
	tweetMessage: tweetMessage
};
