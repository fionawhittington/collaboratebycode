var Twit = require('twit');
var config = require('./config')
var T = new Twit(config);

var stream = T.stream('user');
stream.on('follow', followed);

function followed(eventMsg) {
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
		console.error("Something went wrong in our stream function!", err);
	}
	else{
		console.log("Voila It worked!");
	}
}
