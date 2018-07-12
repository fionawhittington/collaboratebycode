// require express
var express = require('express');
var path    = require('path'); 

// create our router object
var router = express.Router();

var mongoose = require('mongoose');

var Shape = require('./models/shapes');

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

router.get('/quiz', function(req, res) {
  res.render('pages/quiz');
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


router.post('/quiz', function(req, res) {
    console.log(req.body)
    res.send("Visit the Quiz Page")
});

router.post('/canvas', function(req, res) {
  console.log(req.body)
  res.send("Visited the Canvas Page")
});


// // route for our canvas page
// router.get('/canvas', function(req, res) {
//   var shapes = [
//     { shape = String }
//   ];

//   res.render('pages/about', { shapes: shapes });
// });


router.get('/draw', function(req, res) {
    console.log('Get Request for all shapes');
    Shape.find(function(err, shapes){
        console.log(shapes)
        if(err){
            console.log('Error retrieving shapes');
        }else {
            res.json(shapes);
        }
    });
});



router.post("/models/shapes", function (req, res) {
    console.log(req.body);

    var newShape = new Shape(req.body)

    newShape.save(function(err) {
      if(err) {
        console.log(err)
        res.send(500)
      }
      res.send((200).toString())
    })

    // Shape.(req.body, function(err, shapes){
    //     res.json(shapes);
    // });
});

// router.post("./models/shapes", function (req, res) {
//     var myData = new shapes(req.body);
//     myData.save()
//         .then(item => {
//         res.send("item saved to database");
//     })
//         .catch(err => {
//         res.status(400).send("unable to save to database");
//     });
// });

// export our router
module.exports = router;

