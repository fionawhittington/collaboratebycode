shapeToDraw = "shapez"
shapeLine = "linez"
shapeColor = "colorz"

console.log("This is a shape that should be drawn")

console.log(shapeToDraw)

function setup() { 
    var cnv = createCanvas(500, 100);
    // positions canvas 50px to the right and 100px
    // below upper left corner of the window
    cnv.position(1200, 1000);
    background(176, 155, 204);
} 


function draw() {
    clear();
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

// module.exports = {
//     setup,
//     quiztoshape, // key value pairs with the same name can be referenced with one name
//     // For example:
//     // var dog = 'Dog';
//     // var testObject = {
//     //    dog, 
//     //};
//     // console.log(testObject.dog) <---- outputs 'Dog'
// }
