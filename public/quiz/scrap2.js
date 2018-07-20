// <!-- Your First Project — A Dynamic Quiz Week 4 - Learn JS Properly -->
// <body>
//   <h1 id="question"></h1>

//   <form>
//     <input type="radio" name="answer" value="0" id="ans0"> <span id="choice0"></span> </input>
               
//     <input type="radio" name="answer" value="1" id="ans1"> <span id="choice1"></span> </input>
                
//     <input type="radio" name="answer" value="2" id="ans2"> <span id="choice2"></span> </input>
    
//     <br>

//     <input type="button" name="next" value="Next Question" id="next" />

//     </form>
// </body>
// var allQuestions = [];
// // Store each question in an object.
// allQuestions[0] = {
//     question: "What type of environment do you live in?",
//     choices: ["Rural", "Urban", "Suburban"],
// };
// allQuestions[1] = {
//     question: "Which continent are you from?",
//     choices: ["Asia", "Austrlia", "Antartica","Africa", "Europe", "North America", "South America"],
// };
// allQuestions[2] = {
//     question: "What is your affiliation to Red Hat?",
//     choices: ["Employee", "Customer", "Other"],
// };

// // Display first question
// document.getElementById("question").textContent = allQuestions[0].question;

// document.getElementById("choice0").textContent = allQuestions[0].choices[0];

// document.getElementById("choice1").textContent = allQuestions[0].choices[1];

// document.getElementById("choice2").textContent = allQuestions[0].choices[2];

// // Create a variable to store the user's score
// var userScore = 0;

// // Create a variable to store the index of the current question
// var questionNum = 0;

// // When the NEXT button is clicked, the user's score is updated, the current question is hidden, and the next question is revealed.
//   $("#next").click(function() {
   
//   // Check if User answered question.
//   // If so, update user's score. If not, do not continue quiz until answer is given.
//   if($("form input[name=answer]:checked").val() == allQuestions[questionNum].correctAnswer) {
//     userScore++;
//   }
  
//   // If last question, show user's score rather than next question
//     if (questionNum == (allQuestions.length - 1)) {
//     document.getElementsByTagName("form")[0].style.display = "none";
      
//     document.getElementById("question").textContent ="Your score is " + userScore + " out of 3.";
//     }
  
//   // Current question is not the last question, so increment the current question index
//     questionNum++;
  
//   // Replace current question with next question
//     document.getElementById("question").textContent = allQuestions[questionNum].question;

//     document.getElementById("choice0").textContent = allQuestions[questionNum].choices[0];

//     document.getElementById("choice1").textContent = allQuestions[questionNum].choices[1];

//     document.getElementById("choice2").textContent = allQuestions[questionNum].choices[2];
//     });



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
