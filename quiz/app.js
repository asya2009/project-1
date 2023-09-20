let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: 'Errate mal was ich heute essen mag',
    answer: [ 'Blinis', 'Borsch', 'Nichts'],
    corectAnswer: 2
  },
  {
    question: 'Errate mal was ich heute machen mag',
    answer: [ 'Coden', 'Lesen', 'Nichts'],
    corectAnswer: 2
  },
  {
    question: 'Errate mal wen ich heute sehen mag',
    answer: [ 'Dich', 'Angelina', 'Niemanden'],
    corectAnswer: 2
  },
  {
    question: 'Errate mal wieviel Gehirn ich heute besitze',
    answer: [ '100%', '50%', '25%', '0'],
    corectAnswer: 2
  }
];

function displayQuestion() {
  let question = questions[currentQuestionIndex];

  document.getElementById('question').textContent = question.question;

  let answersDiv = document.getElementById('answers');

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement('button');
    answerButton.textContent = answer;
    
    answersDiv.appendChild(answerButton);
  });
}
displayQuestion();

function checkAnswer(userAnswer) {
  let corectAnswer = questions[currentQuestionIndex].corectAnswer;
  if (userAnswer === corectAnswer) {
    score += 1;
  }
  currentQuestionIndex += 1;
}
displayQuestion();