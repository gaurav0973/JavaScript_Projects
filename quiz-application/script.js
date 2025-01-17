document.addEventListener("DOMContentLoaded", () => {
  // Questions
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the square root of 64?",
      choices: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      question: "Which is the largest ocean on Earth?",
      choices: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Who discovered gravity?",
      choices: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Copernicus",
      ],
      answer: "Isaac Newton",
    },
  ];

  // Grabbing elements
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");  
  const restartBtn = document.getElementById("restart-btn");
  
  //creating previous button
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "Previous Question";
  prevBtn.classList.add("hidden");
  prevBtn.id = "prev-btn";
  document.getElementById("quiz-container").appendChild(prevBtn);

  const questionContainer = document.getElementById("question-container");
  const questionText = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  let currentQuestionIndex = 0;
  let score = 0;
  let selectedAnswers = new Array(questions.length).fill(null);

  
  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    }
    updateNavigationButtons();
  });

  prevBtn.addEventListener("click", () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      showQuestion();
    }
    updateNavigationButtons();
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers.fill(null);
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  // Start quiz
  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    prevBtn.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  // Show question
  function showQuestion() {
    questionText.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""; // Clear the choices list
    
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.classList.add("choice-item");
      if (selectedAnswers[currentQuestionIndex] === choice) {
        li.classList.add("selected");
      }
      li.addEventListener("click", () => selectAnswer(choice, li));
      choicesList.appendChild(li);
    });
  }

  // Select answer
  function selectAnswer(choice, li) {
    selectedAnswers[currentQuestionIndex] = choice;

    // Remove "selected" class from all list items
    const allChoices = choicesList.querySelectorAll(".choice-item");
    allChoices.forEach((item) => item.classList.remove("selected"));

    // Highlight the selected choice
    li.classList.add("selected");
  }

  // Show result
  function showResult() {
    questionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    calculateScore();
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }

  // Calculate score
  function calculateScore() {
    score = 0;
    questions.forEach((q, index) => {
      if (selectedAnswers[index] === q.answer) {
        score++;
      }
    });
  }

  // Update navigation buttons
  function updateNavigationButtons() {
    if (currentQuestionIndex === 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }

    if (currentQuestionIndex === questions.length - 1) {
      nextBtn.textContent = "Show Results";
      nextBtn.addEventListener("click", showResult);
    } else {
      nextBtn.textContent = "Next Question";
    }
  }
});
