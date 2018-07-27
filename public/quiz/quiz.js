
var elem = document.getElementById('draw-shapes');
var twoParams = {
    width: 500,
    height: 500
};

var two = new Two(twoParams).appendTo(elem);

console.log("shit");

function check(){

    // drawing a shape on quiz page

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    if (question1 == "Urban") {
        shape = two.makeCircle(72, 100, 50);
    }

    if (question1 == "Rural") {
        shape = two.makePolygon(100, 100, 20, 5);
    }

    if (question1 == "Suburban") {
        shape = two.makeRectangle(100, 100, 500, 500);
    }

    //line thickness based off employment

    if (question2 == "Employee") {
        
        shape.fill = '#FF8000';
    } 
    if (question2 == "Customer") {
        
        shape.fill = '#f44242';
    } 
    if (question2 == "Other") {
        
        shape.fill = '#f441df';
    }   

    //color based off location
    if (question3 == "Asia") {

      shape.linewidth = 1;

    }
    if (question3 == "North America") {

      shape.linewidth = 2;

    }
    if (question3 == "South America") {
        
      shape.linewidth = 3;

    }
    if (question3 == "Antartica") {
       
      shape.linewidth = 4;

    }
    if (question3 == "Australia") {

      shape.linewidth = 5;

    }
    if (question3 == "Africa") {
       
      shape.linewidth = 6;

    }
    if (question3 == "Europe") {
      shape.linewidth = 7;
    }

    two.update();

    var dataToSend = {
        "q1": question1,
        "q2": question2,
        "q3": question3,
    }

    $.post("/quiz", dataToSend, function(returnn) {
        console.log(returnn);
    });

    $.post("/canvas", dataToSend, function(returnn) {
        console.log(returnn);
    });

    $.post("/models/shapes", dataToSend, function(returnn) {
        console.log(returnn);
    });


}
