// Make an instance of two and place it on the page.
// WARNING - For now, at least, these need to be in the global space
// Several functions rely on them
var elem = document.getElementById('draw-shapes');
var twoParams = {
    width: calculateCanvasWidth(),
    height: 200
};

var two = new Two(twoParams).appendTo(elem);

// Number of shapes we want to render in each row of the canvas
var numOfShapesPerRow = calculateNumOfShapesPerRow();
var shapeWidth = (twoParams.width / numOfShapesPerRow) - 5;

// Pull down answers from the backend
$.get("/draw", function(data) {
    drawShapes(data);
});


function calculateCanvasWidth() {
    return elem.clientWidth;
}

function calculateNumOfShapesPerRow() {
    // return $(window).width() > 1000 ? 20 : 5;
    return 10;
}

function answerToShape(answer, index) {
    var position = calculateShapePosition(index);

    var shapeMethod = {
        'Rural': new Two.Ellipse(position.x, position.y, 20, 20),
        'Urban': new Two.Polygon(position.x, position.y, 20, 5),
        'Suburban': new Two.Rectangle(position.x, position.y, 20, 20)
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

    var shape = shapeMethod[answer.q1];
    shape.fill = fillColor[answer.q2];
    shape.linewidth = strokeWidth[answer.q3];

    return shape;
}

function calculateShapePosition(index) {
    var numOfRows = Math.floor(index / numOfShapesPerRow);
    var numOfShapesInCurrentRow = index % numOfShapesPerRow;

    return {
        x: (numOfShapesInCurrentRow * shapeWidth) + (shapeWidth / 2),
        y: (numOfRows * shapeWidth) + (shapeWidth / 2)
    }

}

// Removes any answer objects that lack an answer for any of the questions
function removeUndefined(answer) {
    return !!answer.q1 || !!answer.q2 || !!answer.q3;
}

function drawShapes(shapeData){
    var filteredAnswers = shapeData.filter(removeUndefined);
    var shapes = filteredAnswers.map(answerToShape);

    two.add(shapes);

    two.bind('update', function(frameCount) {
        shapes.map(function(shape) {
            if (shape.scale === 1) {
                shape.scale = 0;
            } else {
                shape.scale += (1 - shape.scale) * 0.025;    
            }
            
        });
        
    }).play();

    two.height = (Math.floor(filteredAnswers.length / numOfShapesPerRow)) * shapeWidth;
    two.update();
}
