// Make an instance of two and place it on the page.
// WARNING - For now, at least, these need to be in the global space
// Several functions rely on them
var elem = document.getElementById('draw-shapes');
var twoParams = {
    width: 100,
    height: 200
};

var two = new Two(twoParams).appendTo(elem);

// Number of shapes we want to render in each row of the canvas
// var numOfShapesPerRow = calculateNumOfShapesPerRow();
// var shapeWidth = (twoParams.width / numOfShapesPerRow) - 5;

// Pull down answers from the backend
// $.get("/draw", function(data) {
//     drawShapes(data);
// });


// function calculateCanvasWidth() {
//     return elem.clientWidth;
// }

// function calculateNumOfShapesPerRow() {
//     // return $(window).width() > 1000 ? 20 : 5;
//     return 10;
// }

function drawShapes(answer) {
    // var position = calculateShapePosition(index);

    var shapeMethod = {
        'Rural': new Two.Ellipse(50, 50, 20, 20),
        'Urban': new Two.Polygon(50, 50, 20, 5),
        'Suburban': new Two.Rectangle(50, 50, 20, 20)
    }

    var fillColor = {
        'Employee': 'blue',
        'Customer': 'orangered',
        'Other': 'grey'
    };

    var strokeWidth = {
        'Asia': 1,
        'South America': 2,
        'North America': 3,
        'Australia': 4,
        'Antartica': 5,
        'Europe': 6,
        'Africa': 7
    };

    var shape = shapeMethod['Rural'];
    console.log(shape);
    // console.log(shape);
    // shape.fill = fillColor[answer];
    // shape.linewidth = strokeWidth[answer];

    return shape;
}

// function calculateShapePosition(index) {
//     var numOfRows = Math.floor(index / numOfShapesPerRow);
//     var numOfShapesInCurrentRow = index % numOfShapesPerRow;

//     return {
//         x: (numOfShapesInCurrentRow * shapeWidth) + (shapeWidth / 2),
//         y: (numOfRows * shapeWidth) + (shapeWidth / 2)
//     }

// }

// // Removes any answer objects that lack an answer for any of the questions
// function removeUndefined(answer) {
//     return !!answer.q1 || !!answer.q2 || !!answer.q3;
// }

function drawShapes(shapeData){
    // var filteredAnswers = shapeData.filter(removeUndefined);
    // var shapes = filteredAnswers.map(answerToShape);

    two.add(shape);

    // two.bind('update', function(frameCount) {
    //     shapes.map(function(shape) {
    //         if (shape.scale === 1) {
    //             shape.scale = 0;
    //         } else {
    //             shape.scale += (1 - shape.scale) * 0.025;    
    //         }
            
    //     });
        
    // }).play();

    // two.height = (Math.floor(filteredAnswers.length / numOfShapesPerRow)) * shapeWidth;
    two.update();
}

// if (typeof define !== 'function') { var define = require('amdefine')(module) }

// define(function(require) {
//     var dep = require('./helper/quiztoshape');

//     //The value returned from the function is
//     //used as the module export visible to Node.
//     return function () {};
// });

// const shapeBuilder = require('./helper/quiztoshape');

// function setup() { 
//     var cnv = createCanvas(500, 500);
//     // positions canvas 50px to the right and 100px
//     // below upper left corner of the window
//     cnv.position(1000, 300);
//     background(176, 155, 204);
// }

// shapeBuilder.setup() //  this is the same function as the above 'setup' function

// // function returnShape(num) {
// //     shapes = [quad(38, 31, 86, 20, 69, 63, 30, 76), ellipse(50, 50, 80, 80), rect(40, 120, 120, 40)]

// //     return shapes[num]
// // }



// function check(){

//     // drawing a shape on quiz page

//     var question1 = document.quiz.question1.value;
//     var question2 = document.quiz.question2.value;
//     var question3 = document.quiz.question3.value;
//     var correct = 0;

//     //shapes based off geography

//     if (question1 == "Urban") {
//         shapeToDraw = "quad"
//     }

//     if (question1 == "Rural") {
//         shapeToDraw = "rect"
//     }

//     if (question1 == "Suburban") {
//         shapeToDraw = "circle"
//     }

//     //line thickness based off employment

//     if (question2 == "Employee") {
        
//         shapeLine = "thick"
//     } 
//     if (question2 == "Customer") {
        
//         shapeLine = "medium"
//     } 
//     if (question2 == "Other") {
        
//         shapeLine = "thin"
//     }   

//     //color based off location
//     if (question3 == "Asia") {

//         shapeColor = "PMS2685"
//     }
//     if (question3 == "North America") {

//         shapeColor = "PMS130"
//     }
//     if (question3 == "South America") {
        
//         shapeColor = "PMS"
//     }
//     if (question3 == "Antartica") {
       
//        shapeColor = "PMS2995"
//     }
//     if (question3 == "Australia") {

//        shapeColor = "PMS362"
//     }
//     if (question3 == "Africa") {
       
//        shapeColor = "PMS375"
//     }
//     if (question3 == "Europe") {
       
//        shapeColor = "PM"
//     }

//     var dataToSend = {
//         "q1": question1,
//         "q2": question2,
//         "q3": question3,
//     }


//     var attributeToSend = {
//         "q1": shapeToDraw,
//         "q2": shapeLine,
//         "q3": shapeColor,
//     }

//     $.post("/quiz", dataToSend, function(returnn) {
//         console.log(returnn);
//     });

//     $.post("/canvas", attributeToSend, function(returnn) {
//         console.log(returnn);
//         console.log(attributeToSend);
//     });

//     $.post("/canvas", dataToSend, function(returnn) {
//         console.log(returnn);
//     });

//     $.post("/models/shapes", dataToSend, function(returnn) {
//         console.log(returnn);
//     });


//     shapeBuilder.draw();

//     // app.post("/quiz", dataToSend, function(returnn) {
//     //     var dataToSend = new shapes(req.body);
//     //     dataToSend.save()
//     //         .then(item => {
//     //         res.send("item saved to database");
//     //     })
//     //         .catch(err => {
//     //         res.status(400).send("unable to save to database");
//     //     });
//     // });


//     // alert('I am at ' + dataToSend.q1);

// }



