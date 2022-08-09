var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("header-question");
var answersEl = document.getElementById("answer-choices");
var containerEl = document.getElementById("container");
var buttonEl = document.getElementById("start-quiz-btn");
var currentIndex = 0;
var timeLeft = 75;

//setup the questions array

var questionsArr = [
    "Which element was the reset() function specifically created for?",
    "Which of these functions can add something to the end of a div?",
    "Which of these functions can check to see if an element matches a certain criteria?",
    "Which of these functions can add content to the end of an array?",
    "How can you stop the default behavior of a browser?",
]

//setup the answers arrays
//array of choices for question 1
var choices1Arr = [
    "<div>","<body>","<button>", "<form>",
]
//array of choices for question 2
var choices2Arr = [
    "appendChild", "appendParent", "createElement", "textContent",
]
//array of choices for question 3
var choices3Arr = [
    "querySelector()", "push()", "matches()", "setTimeOut",
]
//array of choices for question 4
var choices4Arr = [
    "pull()", "push()", "addToArray()", "pushArray()",
]
//array of choices for question 5
var choices5Arr = [
    "click.preventDefault", "stopDefault()", "event.preventDefault", "browserBlock",
]

var questions = [
    {
        text: "Which element was the reset() function specifically created for?",
        choices: ["<div>","<body>","<button>","<form>"],
        correct: "<form>"
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





function startQuiz() {
   timerStart();
   generateQuestion();
}

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
}

function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    alert("You have selected " + selectedAnswer);
    //this is where you check your answer, if/else statement.
    if (selectedAnswer === questions.correct.textContent) {
        alert("Wrong Answer")
        timeLeft.innerHTML = -10;
        generateQuestion;
    }
currentIndex++;
generateQuestion() 
}


//create a timer function

function timerStart() {
  
    var timeInterval = setInterval(function () {

      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' left';
        timeLeft--;
      }
      
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' left';
        timeLeft--;
      }
      
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
} 

buttonEl.addEventListener("click", startQuiz)
