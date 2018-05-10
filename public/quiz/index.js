function setup() { 
    var cnv = createCanvas(500, 500);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(1000, 300);
} 

// function returnShape(num) {
//     shapes = [quad(38, 31, 86, 20, 69, 63, 30, 76), ellipse(50, 50, 80, 80), rect(40, 120, 120, 40)]

//     return shapes[num]
// }

shapeToDraw = "shapez"
shapeLine = "linez"
shapeColor = "colorz"

function draw() {
    clear()
    //ellipse(240, 240, 80, 80);
    //returnShape(0);
    switch (shapeToDraw) {
        case "circle":
            ellipse(50, 50, 80, 80)
            break;              
        case "quad":
            quad(38, 31, 86, 20, 69, 63, 30, 76)
            break;
        case "rect":
            rect(40, 120, 120, 40)
            break;
    }

    switch (shapeLine) {
        case "thick":
            strokeWeight(10)  // Beastly
            break;              
        case "medium":
            strokeWeight(4)
            break;
        case "thin":
            strokeWeight(1);
            break;
    }

    switch (shapeColor) {
        case "PMS2685":
            fill('#3B0083')
            break;              
        case "PMS130":
            fill('#F0AB00')
            break;
        case "PMS":
            fill('#0088CE')
            break;
        case "PMS2995":
            fill('#4E9FDD')
            break;
        case "PMS362":
            fill('#3F9C35')
            break;
        case "PM":
            fill('black')
            break;
    
}
}
function check(){

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var correct = 0;

    //shapes based off geography

    if (question1 == "Urban") {
        shapeToDraw = "quad"
    }

    if (question1 == "Rural") {
        shapeToDraw = "rect"
    }

    if (question1 == "Suburban") {
        shapeToDraw = "circle"
    }

    //line thickness based off employment

    if (question2 == "Employee") {
        
        shapeLine = "thick"
    } 
    if (question2 == "Customer") {
        
        shapeLine = "medium"
    } 
    if (question2 == "Other") {
        
        shapeLine = "thin"
    }   

    //color based off location
    if (question3 == "Asia") {

        shapeColor = "PMS2685"
    }
    if (question3 == "North America") {

        shapeColor = "PMS130"
    }
    if (question3 == "South America") {
        
        shapeColor = "PMS"
    }
    if (question3 == "Antartica") {
       
       shapeColor = "PMS2995"
    }
    if (question3 == "Australia") {

       shapeColor = "PMS362"
    }
    if (question3 == "Africa") {
       
       shapeColor = "PMS375"
    }
    if (question3 == "Europe") {
       
       shapeColor = "PM"
    }

    var shapes = ["img/rectangle_1.png", "img/rectangle_1.png", "img/rectangle_1.png"];
    //var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 2;
        console.log("here")
    }

    if (correct > 0 && correct < 3) {
        score = 1;
    }

    if (correct == 3) {
        score = 0;
    }

    var dataToSend = {
        "q1": question1,
        "q2": question2,
        "q3": question3,
    }

    $.post("/quiz", dataToSend, function(returnn) {
        console.log(returnn);
    });

    $.post("/models/shapes", dataToSend, function(returnn) {
        console.log(returnn);
    });

    // app.post("/quiz", dataToSend, function(returnn) {
    //     var dataToSend = new shapes(req.body);
    //     dataToSend.save()
    //         .then(item => {
    //         res.send("item saved to database");
    //     })
    //         .catch(err => {
    //         res.status(400).send("unable to save to database");
    //     });
    // });


    // alert('I am at ' + dataToSend.q1);

}



