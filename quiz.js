var questions = [
  {
    question: 'What is the capital of India?',
    choices: ['Goa', 'Gujrat', 'New Delhi', 'Kashmir'],
    answer: 2,
  },
  {
    question: 'What is the highest mountain in the world?',
    choices: ['Everest', 'K2', 'Makalu', 'Annapurna'],
    answer: 0,
  },
  {
    question: 'What is the currency of Dubai?',
    choices: ['Euro', 'Dollar', 'Pound', 'Dirham'],
    answer: 3,
  },
  {
    question: 'What is the currency of Dubai?',
    choices: ['Euro', 'Dollar', 'Pound', 'Dirham'],
    answer: 3,
  },
  {
    question: 'What is the currency of Dubai?',
    choices: ['Euro', 'Dollar', 'Pound', 'Dirham'],
    answer: 3,
  },
  {
    question: 'What is the currency of Dubai?',
    choices: ['Euro', 'Dollar', 'Pound', 'Dirham'],
    answer: 2,
  },
  {
    question: 'What is the currency of Dubai?',
    choices: ['Euro', 'Dollar', 'Pound', 'Dirham'],
    answer: 1,
  },
];

var currentQuestion = 0;
var score = 0;
var quizContainer = document.getElementById('quiz-container');
var questionEl = document.getElementById('question');
var choiceBtns = document.querySelectorAll('#choices button');
var scoreEl = document.getElementById('score');

function showQuestion() {
  var question = questions[currentQuestion];
  questionEl.textContent = question.question;
  choiceBtns.forEach(function (btn, index) {
    btn.textContent = question.choices[index];
  });
}

function checkAnswer(event) {
  var selectedBtn = event.target;
  var answer = questions[currentQuestion].answer;
  if (selectedBtn.id == 'btn' + answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  quizContainer.innerHTML =
    '<h1>Quiz completed!</h1><p>Your score is: ' + score + '</p>';
}

showQuestion();
choiceBtns.forEach(function (btn) {
  btn.addEventListener('click', checkAnswer);
});
