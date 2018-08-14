
// require our dependencies
var express        = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParser     = require('body-parser');
var mongoose       = require('mongoose');
var app            = express();
var port           = process.env.PORT || 8080;
var mongoUsername  = process.env.MONGO_USERNAME;
var mongoPassword  = process.env.MONGO_PASSWORD;
var mongoIP  = process.env.MONGO_IP;
var mongoPORT  = process.env.MONGO_PORT || 27017;

var stream = require('./stream');
var search = require('./search');

var app = express();
var db = mongoose.connection;

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

// DATABASE
mongoose.connect('mongodb://' + mongoUsername + ':' + mongoPassword + '@' + mongoIP + ':' + mongoPORT + '/collaboratebycode'); // connect to our database
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log("~ database connected ~"); });

// ROUTES
var router = require('./routes');
app.use('/', router);

// RUN SERVER
app.listen(port, function() {
  console.log('~ app started ~');
});
