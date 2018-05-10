
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
