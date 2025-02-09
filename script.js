const questions = [
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var myVar = 10;", "let myVar = 10;", "const myVar = 10;", "All of the above"],
        correctAnswerIndex: 3 // "All of the above"
    },
    {
        question: "Which of the following is a correct way to define a function in JavaScript?",
        options: [
            "function myFunction() { console.log('Hello!'); }",
            "function: myFunction() { console.log('Hello!'); }",
            "def myFunction() { console.log('Hello!'); }",
            "func myFunction() { console.log('Hello!'); }"
        ],
        correctAnswerIndex: 0 // "function myFunction() { console.log('Hello!'); }"
    },
    {
        question: "What will be the output of the following code?\nconsole.log(typeof null);",
        options: ["null", "object", "undefined", "string"],
        correctAnswerIndex: 1 // "object"
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        options: ["==", "===", "=", "!=="],
        correctAnswerIndex: 1 // "==="
    },
    {
        question: "How do you create an array in JavaScript?",
        options: ["var arr = {};", "var arr = []", "var arr = ();", "var arr = array();"],
        correctAnswerIndex: 1 // "var arr = []"
    },
    {
        question: "Which of the following statements is correct for creating a JavaScript object?",
        options: ["var obj = { key: value };", "var obj = [key: value];", "var obj = (key: value);", "var obj = <key: value>;"],
        correctAnswerIndex: 0 // "var obj = { key: value };"
    },
    {
        question: "What will the following code output?\nlet x = 10;\nx = 'Hello';\nconsole.log(x);",
        options: ["10", "'Hello'", "undefined", "error"],
        correctAnswerIndex: 1 // "'Hello'"
    },
    {
        question: "How do you write a single-line comment in JavaScript?",
        options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "# This is a comment"],
        correctAnswerIndex: 0 // "// This is a comment"
    },
    {
        question: "What does the Array.prototype.push() method do in JavaScript?",
        options: [
            "Adds an element to the end of an array.",
            "Removes the first element of an array.",
            "Returns the last element of an array.",
            "Adds an element to the beginning of an array."
        ],
        correctAnswerIndex: 0 // "Adds an element to the end of an array."
    },
    {
        question: "Which of the following will cause an error in JavaScript?",
        options: [
            "console.log(1 / 0);",
            "console.log(undefined + 2);",
            "console.log(5 * 'hello');",
            "console.log(true + false);"
        ],
        correctAnswerIndex: 2 // "console.log(5 * 'hello');"
    },
    {
        question: "What is the output of the following code?\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);",
        options: [
            "[1, 2, 3]",
            "[1, 2, 3, 4]",
            "[4, 1, 2, 3]",
            "[4]"
        ],
        correctAnswerIndex: 1 // "[1, 2, 3, 4]"
    },
    {
        question: "What is the result of this expression in JavaScript?\nconsole.log(0 == false);",
        options: ["true", "false", "undefined", "NaN"],
        correctAnswerIndex: 0 // "true"
    },
    {
        question: "Which of the following is the correct way to create a 'for' loop in JavaScript?",
        options: [
            "for (let i = 0; i < 10; i++)",
            "for (i = 0; i < 10; i++)",
            "loop (let i = 0; i < 10; i++)",
            "for (i <= 10; i++)"
        ],
        correctAnswerIndex: 0 // "for (let i = 0; i < 10; i++)"
    },
    {
        question: "How can you check if a variable is an array in JavaScript?",
        options: ["Array.isArray(variable);", "variable instanceof Array;", "typeof variable === 'array';", "Both a) and b)"],
        correctAnswerIndex: 3 // "Both a) and b)"
    },
    {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
            "The current function being executed.",
            "The global object (in non-strict mode).",
            "The object from which the method was called.",
            "None of the above."
        ],
        correctAnswerIndex: 2 // "The object from which the method was called."
    }
];

let score = 0;
let currentQuestionIndex = 0;

function showNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const question = questions[currentQuestionIndex];
        document.getElementById("question-container").textContent = question.question;
        const optionsContainer = document.getElementById("options-container");
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.textContent = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });

        updateProgress();
    } else {
        showResults();
    }
}

function checkAnswer(selectedAnswerIndex) {
    if (questions[currentQuestionIndex].correctAnswerIndex === selectedAnswerIndex) {
        score++;
    }
    currentQuestionIndex++;
    showNextQuestion();
}

function updateProgress() {
    document.getElementById("progress").textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function showResults() {
    document.getElementById("results").style.display = "block";
    document.getElementById("finalScore").textContent = score;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("results").style.display = "none";
    showNextQuestion();
}


showNextQuestion();