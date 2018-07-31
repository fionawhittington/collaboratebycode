var userAnswers = {
    // Set some default values
    'environment': 'urban',
    'affiliation': 'employee',
    'continent': 'asia'
};

var canvasMount = document.getElementById("draw-shapes");
var canvas = new CanvasManager(canvasMount);

function updateShapeAttr(attr, value) {
    userAnswers[attr] = value;
    setQuestionAnswer(attr, value);
    renderShapeToCanvas(attr, value);
}

function setQuestionAnswer(category, selectedAnswer) {
    var answers = $("#" + category + " .answer");
    var selectedAnswerElement = $("#" + category + "-" + selectedAnswer)

    // Set all answers for category to inactive
    answers.removeClass("selected");
    selectedAnswerElement.addClass("selected")

}

function renderShapeToCanvas() {
    canvas.clear();
    var shapeAttrs = answersToAttributes();

    var shape = canvas.draw(shapeAttrs.shape, shapeAttrs.sizeArgs);
    shape.fill = shapeAttrs.fill;
    shape.linewidth = shapeAttrs.linewidth;
    shape.stroke = 'red'; // This is just a default, and we can change it whenever
    canvas.update();
}

function answersToAttributes(attr, value) {
    var shape = {
        'urban': 'rectangle',
        'rural': 'polygon',
        'suburban': 'ellipse'
    }[userAnswers.environment];

    var sizeArgs = {
        'rectangle': [110, 110, 200, 200],
        'polygon': [110, 110, 50, 5],
        'ellipse': [110, 110, 100, 100]
    }[shape];

    var linewidth = {
        // These correspond to pixel values
        'employee': 2,
        'cutomer': 4,
        'other': 6 
    }[userAnswers.affiliation];

    var fill = {
        'africa': 'blue',
        'asia': 'red',
        'northamerica': 'green',
        'southamerica': 'yellow',
        'europe': 'orange',
        'australia': 'purple'
    }[userAnswers.continent];

    return {
        shape: shape,
        linewidth: linewidth,
        fill: fill,
        sizeArgs: sizeArgs
    };
}

//Update Progress Bar

var x = 0;

function move() {
    var elem = document.getElementById("myBar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }

    x++;
    document.getElementById("currentQuestion").innerHTML = x;
    return false;
}

//SlideShow for Questions

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var next = document.getElementsByClassName("next");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < next.length; i++) {
        next[i].className = next[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    next[slideIndex-1].className += " active";
    // setTimeout(showSlides, 2000); // Change image every 2 seconds
}