let score = 0;
let currentQuestionIndex = 0;

let questions = [
  {
    question: "Угадай, что я могу съесть сегодня",
    answers: ["Blinis", "Borsch", "Nichts"],
    correctAnswer: 2,
  },
  {
    question: "Угадай, что я могу сделать сегодня",
    answers: ["Coden", "Lesen", "Nichts"],
    correctAnswer: 2,
  },
  {
    question: "Угадай, кого я могу увидеть сегодня",
    answers: ["Dich", "Angelina", "Niemanden"],
    correctAnswer: 2,
  },
  {
    question: "Угадай, сколько у меня сегодня мозгов",
    answers: ["100%", "50%", "25%", "0"],
    correctAnswer: 2,
  },
];

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById('quiz-container').hidden = true;
    document.getElementById('result').hidden = false;
    document.getElementById('score').textContent = score;
    return;
  }

  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = '';

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.classList.add('btn', 'btn-dark', 'me-4')
    answerButton.textContent = answer;
    answerButton.onclick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}
displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (userAnswer == correctAnswer) {
    score += 1;
  } else {
    alert(`Die Antwort war leider falsch`);
  }
  nextQuestion();
}

function nextQuestion() {
  currentQuestionIndex += 1;
  displayQuestion();
}