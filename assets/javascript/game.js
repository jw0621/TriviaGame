// score variable
var score=0
// qn is the player's response, qnA is the answer key
var q1;
var q1A= true;
var q2;
var q2A= false;
var q3;
var q3A= false;
var q4;
var q4A = true;
var q5;
var q5A = true;
var q6;
var q6A = true;
var q7;
var q7A = false;
var q8;
var q8A = true;
var q9;
var q9A = false;
var q10;
var q10A = false;
var q11;
var q11A = false;
var q12;
var q12A = true;
var q13;
var q13A = false;
var q14;
var q14A = true;
var q15
var q15A = true;
// Timer Function
var sec = 15;
var time = setInterval(myTimer, 1000);
function myTimer() {
    $('#timer').html(sec + "sec left");
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time's Up!");
    }
};

//Questions object with attributes text, response, answer
var questions = {};

// on clicking start button, display text attr from questions object in currentQ
// on click events for true/false buttons to set response attr accordingly
// if response boolean matches answer boolean, score++ $("#answer").text(You are correct!), clear currentQ, display next question
// if response != answer, display "Incorrect! The correct answer is "+(answer attr) in ("#answer"), display next question
// if at end of object, alert game over!, display reset button.
// reset button on click: clear(score), reset through questions object
