var express = require('express');
var path    = require('path'); 
var mongoose = require('mongoose');
var Shape = require('./models/shapes');
var router = express.Router();

// Keeping this empty middleware to use as an example
router.use(function(req, res, next) {
	// middleware logic goes here - logging, authentication, etc.
	next(); // make sure we go to the next routes and don't stop here
});

// route for homepage
router.get('/', function(req, res) {
  res.render('pages/home');
});

// route for about page
router.get('/about', function(req, res) {
  res.render('pages/about');
});

// route for quiz page
router.get('/quiz', function(req, res) {
  res.render('pages/quiz');
});

// route for canvas page
router.get('/canvas', function(req, res) {
  res.render('pages/canvas');
});


router.post('/quiz', function(req, res) {
    res.send("Visit the Quiz Page")
});

router.post('/canvas', function(req, res) {
  res.send("Visited the Canvas Page")
});


router.get('/draw', function(req, res) {
    Shape.find(function(err, shapes){
        if(err){
            console.error('Error retrieving shapes');
        }else {
            res.json(shapes);
        }
    });
});


router.post("/models/shapes", function (req, res) {
    var newShape = new Shape(req.body)

    newShape.save(function(err) {
      if(err) {
        console.log(err)
        res.send(500)
      }
      res.send((200).toString())
    })
});

// export our router
module.exports = router;
