
function bullshitFn(varriable) {
    console.log(varriable)
    console.log("This got called")
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0, 0, 0);
    noLoop(); 
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw(quizData){
    if (typeof quizData !== 'undefined') {

        for (i = 0; i < quizData.length; i++) {
       
            if (quizData.i.q1 == "Rural") {
                console.log("here");
                ellipse(50, 50, 80, 80)
            }

        }

    }
}

$.get("/draw", function(data) {
    console.log(data);
    bullshitFn(data)
    draw(data)
});

//myObj = shapes
//cars = q1

// 0 {
//     q1: urban

// }

// :
// q1
// :
// "Rural"
// q2
// :
// "Employee"
// q3
// :
// "Asia"
// __v
// :
// 0
// _id
// :
// "5aeb52e998202d33c0214936"
// __proto__
// :
// Object
// 1
// :
// q1
// :
// "Suburban"
// q2
// :
// "Customer"
// q3
// :
// "South America"
// __v
// :
// 0
// _id
// :
// "5aeb536dd64f9a33e10fb2b2"