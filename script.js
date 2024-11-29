const quizQuestions = [
  {
    question: "What does the <a> tag in HTML represent?",
    options: ["A. Anchor (Hyperlink)", "B. Article", "C. Audio", "D. Array"],
    correctAnswer: "A. Anchor (Hyperlink)",
  },
  {
    question:
      "Which CSS property is used to change the background color of an element?",
    options: [
      "A. color",
      "B. background-color",
      "C. background-style",
      "D. fill-color",
    ],
    correctAnswer: "B. background-color",
  },
  {
    question:
      "What is the output of the following JavaScript code?\nconsole.log(typeof null);",
    options: ["A. 'null'", "B. 'undefined'", "C. 'object'", "D. 'number'"],
    correctAnswer: "C. 'object'",
  },
  {
    question: "What does 'OOP' stand for in programming?",
    options: [
      "A. Object-Oriented Programming",
      "B. Operations on Programming",
      "C. Optimized Output Processing",
      "D. Overhead Operations Process",
    ],
    correctAnswer: "A. Object-Oriented Programming",
  },
  {
    question: "What does 'SQL' stand for?",
    options: [
      "A. Structured Query Language",
      "B. Simple Query Logic",
      "C. Sequential Query Language",
      "D. Systematic Query Language",
    ],
    correctAnswer: "A. Structured Query Language",
  },
  {
    question: "Which SQL keyword is used to retrieve data from a database?",
    options: ["A. SELECT", "B. GET", "C. RETRIEVE", "D. FETCH"],
    correctAnswer: "A. SELECT",
  },
  {
    question: "What is the time complexity of a binary search algorithm?",
    options: ["A. O(n)", "B. O(n²)", "C. O(log n)", "D. O(1)"],
    correctAnswer: "C. O(log n)",
  },
  {
    question:
      "Which sorting algorithm is the fastest for large datasets on average?",
    options: [
      "A. Bubble Sort",
      "B. Quick Sort",
      "C. Insertion Sort",
      "D. Selection Sort",
    ],
    correctAnswer: "B. Quick Sort",
  },
  {
    question:
      "Which JavaScript method is used to convert a JSON string into a JavaScript object?",
    options: [
      "A. JSON.parse()",
      "B. JSON.stringify()",
      "C. JSON.objectify()",
      "D. JSON.convert()",
    ],
    correctAnswer: "A. JSON.parse()",
  },
  {
    question: "Which Python keyword is used to define a function?",
    options: ["A. func", "B. function", "C. define", "D. def"],
    correctAnswer: "D. def",
  },
  {
    question: "Which language is primarily used for developing Android apps?",
    options: ["A. Swift", "B. Kotlin", "C. JavaScript", "D. PHP"],
    correctAnswer: "B. Kotlin",
  },
  {
    question:
      "Which command is used to check the status of your Git repository?",
    options: ["A. git check", "B. git status", "C. git log", "D. git track"],
    correctAnswer: "B. git status",
  },
  {
    question:
      "Which data structure uses the FIFO (First In, First Out) principle?",
    options: ["A. Stack", "B. Queue", "C. Array", "D. Linked List"],
    correctAnswer: "B. Queue",
  },
  {
    question: "What is the extension of a JavaScript file?",
    options: ["A. .java", "B. .js", "C. .script", "D. .jsx"],
    correctAnswer: "B. .js",
  },
  {
    question: "What is the purpose of the 'break' statement in programming?",
    options: [
      "A. Exit a loop or switch statement",
      "B. Pause the execution of the program",
      "C. Return a value from a function",
      "D. Restart a loop",
    ],
    correctAnswer: "A. Exit a loop or switch statement",
  },
  {
    question: "Which programming language is known as the backbone of the web?",
    options: ["A. Python", "B. Java", "C. HTML", "D. JavaScript"],
    correctAnswer: "C. HTML",
  },
  {
    question: "Which of the following is a valid variable name in JavaScript?",
    options: [
      "A. 1variable",
      "B. variable-name",
      "C. variableName",
      "D. var@name",
    ],
    correctAnswer: "C. variableName",
  },
  {
    question:
      "Which method is used to add an element to the end of an array in JavaScript?",
    options: ["A. push()", "B. pop()", "C. unshift()", "D. splice()"],
    correctAnswer: "A. push()",
  },
  {
    question: "Which of the following is not a relational database?",
    options: ["A. MySQL", "B. MongoDB", "C. PostgreSQL", "D. SQLite"],
    correctAnswer: "B. MongoDB",
  },
  {
    question: "Which of these is a valid way to start a Python list?",
    options: ["A. {1, 2, 3}", "B. [1, 2, 3]", "C. (1, 2, 3)", "D. <1, 2, 3>"],
    correctAnswer: "B. [1, 2, 3]",
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "A. font-style",
      "B. text-size",
      "C. font-size",
      "D. text-transform",
    ],
    correctAnswer: "C. font-size",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    options: ["A. class", "B. id", "C. style", "D. inline"],
    correctAnswer: "C. style",
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["A. String", "B. Boolean", "C. Integer", "D. Undefined"],
    correctAnswer: "C. Integer",
  },
  {
    question: "Which symbol is used to comment a single line in Python?",
    options: ["A. //", "B. /* */", "C. #", "D. <!-- -->"],
    correctAnswer: "C. #",
  },
  {
    question: "Which HTML element is used to include JavaScript in a page?",
    options: ["A. <js>", "B. <javascript>", "C. <script>", "D. <code>"],
    correctAnswer: "C. <script>",
  },
  {
    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["A. ==", "B. ===", "C. =", "D. !=="],
    correctAnswer: "B. ===",
  },
  {
    question: "What is the default alignment of text in HTML?",
    options: ["A. Left", "B. Center", "C. Right", "D. Justify"],
    correctAnswer: "A. Left",
  },
  {
    question: "Which command is used to initialize a new Git repository?",
    options: ["A. git start", "B. git init", "C. git create", "D. git new"],
    correctAnswer: "B. git init",
  },
  {
    question: "Which of the following is not a programming paradigm?",
    options: [
      "A. Functional",
      "B. Object-Oriented",
      "C. Declarative",
      "D. Relational",
    ],
    correctAnswer: "D. Relational",
  },
  {
    question: "Which method is used to sort an array in JavaScript?",
    options: ["A. sort()", "B. order()", "C. arrange()", "D. organize()"],
    correctAnswer: "A. sort()",
  },
];

function escapeHTML(text) {
  return text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};


const quizContainerEl = document.querySelector(".quizContainer");
let currentQuestionIndex = 0;
let userAnswers = [];
const renderQuestions = (index) => {
  quizContainerEl.innerHTML = "";
  const currentQuiz = quizQuestions[index];

  const quizEl = document.createElement("div");
  quizEl.classList.add("questionDisplay");

  quizEl.innerHTML = `<h3>${index + 1}. ${escapeHTML(currentQuiz.question)}</h3>`;

  //  displaying options

  currentQuiz.options.forEach((option) => {
    const optionEl = document.createElement("div");
    optionEl.classList.add("option");
    optionEl.innerHTML = `<label>
                             <input type="radio" name="question${index}" value="${escapeHTML(option)}" ${userAnswers[index] === option ? "checked" : ""}>${escapeHTML(option)}
                          </label>`;
    quizEl.appendChild(optionEl);
  });

  const prevBtn = document.querySelector(".btn-prev");
  const nextBtn = document.querySelector(".btn-next");

  if (index > 0) {
    prevBtn.onclick = () => {
      saveAnswer(index);
      currentQuestionIndex--;
      renderQuestions(currentQuestionIndex);
    };
  }

  if (index < quizQuestions.length - 1) {
    nextBtn.onclick = () => {
      saveAnswer(index);
      currentQuestionIndex++;
      renderQuestions(currentQuestionIndex);
    };
  }else{
    nextBtn.textContent = "Submit";
    nextBtn.onclick = () => {
      saveAnswer(index);
      calculateScore();
    };
  };

  quizContainerEl.appendChild(quizEl);

};

  //  Save the Selected Answer
  function saveAnswer (index){
    const selectOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    userAnswers[index] = selectOption ? selectOption.value : null;
  };

  //  calculate the score and show results

  function calculateScore (){
    const resultMessageEl =document.querySelector(".resultMessage")
    const scoreLabelEL = document.querySelector(".scoreValue");
    let score = 0;

    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer){
        score++
      }
    });

    // Display the result and congrats message
    quizContainerEl.innerHTML = `<h2>Quiz Completed!</h2>`;
    scoreLabelEL.textContent = score;
    resultMessageEl.textContent = `${score > 15 ? "Congratulation" : ""} You Scored ${score} out of ${quizQuestions.length} ! ${score > 15 ? "Well done" : "Try again"}`;

    resultMessageEl.style.display = "block";

  }

renderQuestions(currentQuestionIndex);
