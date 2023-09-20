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
  let question = questions[currentQuestionIndex];

  document.getElementById("question").textContent = question.question;

  let answersDiv = document.getElementById("answers");

  question.answers.forEach((answer, index) => {
    let answerButton = document.createElement("button");
    answerButton.textContent = answer;
    answerButton.oncklick = () => checkAnswer(index);
    answersDiv.appendChild(answerButton);
  });
}
displayQuestion();

function checkAnswer(userAnswer) {
  let correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (userAnswer == correctAnswer) {
    score += 1;
  } else {
    return `Antwort ${correctAnswer} ist leider falsch`;
  }
  currentQuestionIndex += 1;
  displayQuestion();
}
