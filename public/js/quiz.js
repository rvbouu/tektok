
const quizQs = [
  {
    question: "What's your favorite color?",
    answer1: "Red",
    ans1Total: 1,
    answer2: "Orange",
    ans2Total: 2,
    answer3: "Yellow",
    ans3Total: 3,
    answer4: "Blue",
    ans4Total: 4,
  },
  {
    question: "What do you like to do in your free time?",
    answer1: "Hiking and being outdoors",
    ans1Total: 1,
    answer2: "Indoors, reading a book",
    ans2Total: 2,
    answer3: "Sleep. Always.",
    ans3Total: 3,
    answer4: "Free time? What's that?",
    ans4Total: 4,
  },
  {
    question: "Thoughts on mustaches?",
    answer1: "Love them <3",
    ans1Total: 1,
    answer2: "They're okay...",
    ans2Total: 2,
    answer3: "Ugh, get them away from me!",
    ans3Total: 3,
    answer4: "Who cares?",
    ans4Total: 4,
  },
  {
    question: "Ready for your results?",
    answer1: "Let's gooo!",
    ans1Total: 1
  }
]

let currentQ = 0;
let score = [];
let selectedAns = [];
const totalQs = quizQs.length;

function generateQs(i) {
  const question = quizQs[i];
  const opt1Total = quizQs[i].ans1Total;
  const opt2Total = quizQs[i].ans2Total;
  const opt3Total = quizQs[i].ans3Total;
  const opt4Total = quizQs[i].ans4Total;

  questionEl.innerHTML = `${i + 1}. ${quizQs.question}`;
  opt1.setAttribute('data-total', `${opt1Total}`);
  opt2.setAttribute('data-total', `${opt2Total}`);
  opt3.setAttribute('data-total', `${opt3Total}`);
  opt4.setAttribute('data-total', `${opt4Total}`);

  opt1.innerHTML = `${quizQs.answer1}`;
  opt2.innerHTML = `${quizQs.answer2}`;
  opt3.innerHTML = `${quizQs.answer3}`;
  opt4.innerHTML = `${quizQs.answer4}`;
}

function loadNextQ() {
  const selectedOption = document.querySelector('input[type="radio"]:checked');
  //Check if there is a radio input checked
  if (!selectedOption) {
    alert('Please select your answer!');
    return;
  }
  //Get value of selected radio
  const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

  ////Add the answer score to the score array
  score.push(answerScore);

  selectedAnswersData.push()


  const totalScore = score.reduce((total, currentNum) => total + currentNum);

  currentQuestion++;

  selectedOption.checked = false;

  if (currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }

  if (currentQuestion == totalQuestions) {
    container.style.display = 'none';
    if (totalScore >= 5){
      result.innerHTML =
      `<h2 class="final-score">Your are Handlebars.js!</h2>
      <button class="restart">Restart Quiz</button>`
    } else if(totalScore >= 9){
      result.innerHTML =
      `<h2 class="final-score">Your are HTML!</h2>
      <button class="restart">Restart Quiz</button>`
    } else if(totalScore == 10){
      result.innerHTML =
      `<h2 class="final-score">Your are JavaScript!</h2>
      <button class="restart">Restart Quiz</button>`
    } else if(totalScore <= 11 ){
      result.innerHTML =
      `<h2 class="final-score">Your are CSS!</h2>
      <button class="restart">Restart Quiz</button>`
    }
    return;
  }
  generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {

  currentQuestion--;

  score.pop();

  generateQuestions(currentQuestion);
}


function restartQuiz(e) {
  if(e.target.matches('button')) {

  currentQuestion = 0;
  score = [];

  location.reload();
  }
}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);