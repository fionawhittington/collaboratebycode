// require express
var express = require('express');
var path    = require('path');

// create our router object
var router = express.Router();

// export our router
module.exports = router;

// route for our homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for our about page
router.get('/about', function(req, res) {
  var users = [
    { name: 'Fiona Whittington', email: 'fwhittin@redhat.com', avatar: 'img/fiona.jpg'},
    { name: 'Grace Colbert', email: 'gcolbert@redhat.com', avatar: 'img/grace.jpg'}
  ];

  res.render('pages/about', { users: users });
});

router.get('/contact', function(req, res) {
  res.render('pages/contact');
});

router.post('/contact', function(req, res) {
  res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!');
});

router.get('/canvas', function(req, res) {
  res.render('pages/canvas');
});

// pulled from server.js
// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

//API
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/api', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});