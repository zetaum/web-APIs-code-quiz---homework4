var currentQuestion = 0;
var score = 0;
var questions = [{
    question:'Inside which HTML element do we put the JavaScript?',
    option1: 'javascript',
    option2: 'js',
    option3: 'scripting',
    option4: 'script',
    answer: '4',
    }, {
    question: 'Where is the correct place to insert a JavaScript?',
    option1: 'The <head> section',
    option2: 'The <body> section',
    option3: 'Both the <head> section and the <body> secion',
    option4: 'None of the above',
    answer: '1',
    }, {
    question: 'How do you write "Hello World" in an alert box?',
    option1: 'msgBox("Hello World");',
    option2: 'msg("Hello World");',
    option3: 'alert("Hello World");',
    option4: 'alertBox("Hello World");',
    answer: '3',
    }, {
    question: 'How do you call a function named "myFunction"?',
    option1: 'call function myFunction()',
    option2: 'myFunction()',
    option3: 'call myFunction()',
    option4: 'none of the above',
    answer: '2',
    }, {
    question: 'How does a FOR loop start?',
    option1: 'for(i=0; i<=5; i++)',
    option2: 'for(i < 0;i <+5)',
    option3: 'for(i<=5; i++)',
    option4: 'for i = 1 to 5',
    answer: '1',
    }];
    
var totalQuestions = questions.length;

var container = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('exampleRadios1');
var opt2 = document.getElementById('exampleRadios2');
var opt3 = document.getElementById('exampleRadios3');
var opt4 = document.getElementById('exampleRadios4');
var startButton = document.getElementById('start-btn');
var nextQuestion = document.getElementById ('next-btn');
var resultCont = document.getElementById ('submit-btn');


function loadQuestion (questionIndex) {
   var q = questions [questionIndex];
   questionEl.textContent = (questionIndex + 1) + '.' + q.question;
   opt1.textContent = q.option1;
   opt2.textContent = q.option2;
   opt3.textContent = q.option3;
   opt4.textContent = q.option4;

};

function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption) {
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score +=10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1) {
        nextButton.textContent = "Finish";
    }
    if(currentQuestion == totQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score: " + score;
        return;
    }


    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);