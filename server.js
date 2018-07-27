        
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 8080;

var stream = require('./stream');
var scheduleTweet = require('./schedule-tweet');
var postTweet = require('./post-tweet');
var search = require('./search');

var app = express();

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


// DATABASE
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/collaboratebycode'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});
// ROUTES
var router = require('./app/routes');
app.use('/', router);

// start the server
app.listen(port, function() {
  console.log('app started');
});
