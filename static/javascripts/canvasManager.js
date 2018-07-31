// This file is used to interface with whatever
// canvas library we use. This is so that we can call all sorts of
// methods to build canvas shapes, without needing to tear out a
// library from multiple files, if we switch libraries

function CanvasManager(element, extraParams) {
    var params = {
        width: 600,
        height: 400
    };

    if (extraParams) params = Object.assign({}, params, extraParams)

    this.canvas = new Two(params).appendTo(element);
}

// Removes all shapes from the canvas
CanvasManager.prototype.clear = function() {
    this.canvas.clear();
}

CanvasManager.prototype.update = function() {
    this.canvas.update();
}

CanvasManager.prototype.draw = function(shape, attrs) {
    const shapes = {
        "rectangle": Two.Rectangle,
        "ellipse": Two.Ellipse,
        "polygon": Two.Polygon
    };

    var shape = new shapes[shape](...attrs);
    this.canvas.add(shape);

    return shape;
}

output.push(
  `<div class="slide">
    <div class="question"> ${currentQuestion.question} </div>
    <div class="answers"> ${answers.join("")} </div>
  </div>`
);

// pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active-slide');
  slides[n].classList.add('active-slide');
  currentSlide = n;
  if(currentSlide===0){
    previousButton.style.display = 'none';
  }
  else{
    previousButton.style.display = 'inline-block';
  }
  if(currentSlide===slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
  }
  else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
  }
}
showSlide(0);