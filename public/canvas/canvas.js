
function bullshitFn(varriable) {
    console.log(varriable)
    console.log("This got called")
}

function setup() {
    // createCanvas(windowWidth, windowHeight);
    var cnv = createCanvas(500, 500);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(100, 53);
    background(0, 0, 0);
    noLoop(); 
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }


$.get("/draw", function(data) {
    bullshitFn(data)
    draw(data)
});

$.get("/quiz", function(drawData) {
    draw(dataToSend)
});


function draw(attributeToSend){
    if (typeof attributeToSend !== 'undefined') {
        console.log(attributeToSend)
        draw();

        // for (i = 0; i < quizData.length; i++) {
       
        //     if (quizData.i.q1 == "Rural") {
        //         console.log("here");
        //         ellipse(50, 50, 80, 80)
        //     }

        // }

    }
}
