
//list of variables
var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("header-question");
var answersEl = document.getElementById("answer-choices");
var containerEl = document.getElementById("container");
var buttonEl = document.getElementById("start-quiz-btn");
var currentIndex = 0;
var timeLeft = 75;


var qH3 = document.createElement("h3");
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");





//array of objects for questions, answer choices, and correct answer choices. 
var questions = [
    {  
        text: "Which element was the reset() function specifically created for?",
        choices: ["<div>","<body>","<button>","<form>"],
        correct: "<form>",
    },
    {
        text: "Which of these functions can add something to the end of a div?",
        choices: ["appendChild", "appendParent", "createElement", "textContent",],
        correct: "appendChild"
    },
    {
        text: "Which of these functions can check to see if an element matches a certain criteria?",
        choices: ["querySelector()", "push()", "matches()", "setTimeOut",],
        correct: "matches()"
    },
    {
        text: "Which of these functions can add content to the end of an array?",
        choices: ["pull()", "push()", "addToArray()", "pushArray()"],
        correct: "push()"
    },
    {
        text: "How can you stop the default behavior of a browser?",
        choices: ["click.preventDefault", "stopDefault()", "event.preventDefault", "browserBlock"],
        correct: "event.preventDefault"
    }
]


//function to start the quiz, start the timer, and generate the question
function startQuiz() {
   timerStart();
   generateQuestion();
   
}

// function to create question and answer elements
function generateQuestion() {

    containerEl.innerHTML = "";
    var qH3 = document.createElement("h3");
    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    var btn3 = document.createElement("button");
    var btn4 = document.createElement("button");
    qH3.textContent = questions[currentIndex].text;
    qH3.style.color = "white";
    btn1.textContent = questions[currentIndex].choices[0];
    btn1.addEventListener("click", checkAnswer);
    btn2.textContent = questions[currentIndex].choices[1];
    btn2.addEventListener("click", checkAnswer);
    btn3.textContent = questions[currentIndex].choices[2];
    btn3.addEventListener("click", checkAnswer);
    btn4.textContent = questions[currentIndex].choices[3];
    btn4.addEventListener("click", checkAnswer);
    containerEl.append(qH3, btn1, btn2, btn3, btn4);

    if (questions[currentIndex] === 4) {
        var qH3 = ""
    }
}

//function to check if the answer is correct, if not, deprecate time by 10 seconds.

function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    //alert("You have selected " + selectedAnswer);
    //this is where you check your answer, if/else statement.
    if (selectedAnswer === questions[currentIndex].correct) {
        alert("Correct!");
        }

   else {
        timeLeft -= 10;
        alert("Wrong!");
    }

currentIndex++;

generateQuestion()
    
}


var clearPage = function() {
    containerEl = ""
}


function showScore () {

       containerEl = "";
       var scoreHeader = document.createElement("h2");
       scoreHeader.textContent = "Your Score: " + timeLeft;
       scoreHeader.style.color = "white";
       var enterInitials = document.createElement("form");
       enterInitials.textContent = "Your Initials";
       yourScore.style.color = "white";
       var enterBtn = document.createElement("submit");
       enterBtn.textContent = "Enter";
       containerEl.append(scoreHeader, enterInitials, enterBtn)

    }

//create a timer function

function timerStart() {
  
    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' left';
        timeLeft--;
      }
     //when to end the quiz
      else if (timeLeft === 0 || questions[currentIndex].text === 4) {
            clearPage();
            showScore ();
            clearInterval(timeInterval);


        //showScore();
      };
    }, 1000);
}

function showScore () {

    containerEl = "";
    var scoreHeader = document.createElement("h2");
    scoreHeader.textContent = "Your Score: " + timeLeft;
    scoreHeader.style.color = "white";
    var enterInitials = document.createElement("form");
    enterInitials.textContent = "Your Initials";
    yourScore.style.color = "white";
    var enterBtn = document.createElement("submit");
    enterBtn.textContent = "Enter";
    containerEl.append(scoreHeader, enterInitials, enterBtn)

 }

buttonEl.addEventListener("click", startQuiz)
