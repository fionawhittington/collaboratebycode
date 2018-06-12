console.log("Shapes is up now..")
var mongoose = require('mongoose')
var shapesModel = require('./app/models/shapes')

console.log(shapesModel)

function drawData(data){

  clear()
  //ellipse(240, 240, 80, 80);
  //returnShape(0);
  switch (dataToSend.q1) {
      case "urban":
          ellipse(50, 50, 80, 80)
          break;              
      case "quad":
          quad(38, 31, 86, 20, 69, 63, 30, 76)
          break;
      case "circle":
          rect(40, 120, 120, 40)
          break;
  }

  switch (dataToSend.q2) {
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

  switch (dataToSend.q3) {
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
// //functions available to other files
// // module.exports = {
// //   drawData: drawData
// // };

