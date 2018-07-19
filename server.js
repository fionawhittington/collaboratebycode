        
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var app            = express();
var port           = process.env.PORT || 8080;
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data

var stream = require('./stream');
var scheduleTweet = require('./schedule-tweet');
var postTweet = require('./post-tweet');
var search = require('./search');

//Do I need this?
// var drawShape = require('./helper/drawShape');
var quizToShape = require('./helper/quizToShape');

var app = express();

// use ejs and express layouts
app.set('view engine', 'ejs');
app.use(expressLayouts);


var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost/collaboratebycode'); // connect to our database

// Handle the connection event
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("DB connection alive");
});


// use body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set static files (css and images, etc) location
app.use(express.static(__dirname + '/public'));

// route our app
var router = require('./app/routes');
app.use('/', router);


// start the server
app.listen(port, function() {
  console.log('app started');
});

// search.searchData('rect', function(ret){
//   console.log(ret)
// })

// search.searchData('height', function(ret){
//   console.log(ret)
// })

// search.searchData('urban', function(ret){
//   console.log(ret)
// })


