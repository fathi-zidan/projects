const questions = [
    {
        question: "What country has the highest life expectancy?",
        options: [{ text: "USA", correct: false },
        { text: "China", correct: false },
        { text: "India", correct: false },
        { text: "Hong Kong", correct: true }]
    },
    {
        question: "Where would you be if you were standing on the Spanish Steps?",
        options: [{ text: "Rome", correct: true },
        { text: "Spain", correct: false },
        { text: "china", correct: false },
        { text: "london", correct: false }],
    },
    {
        question: "Which language has the more native speakers: English or Spanish?",
        options: [{ text: "English", correct: true },
        { text: "Spanish", correct: false }
        ]
    },
    {
        question: "What year was the United Nations established?",
        options: [{ text: 1945, correct: true },
        { text: 1946, correct: false },
        { text: 1956, correct: false },
        { text: 1988, correct: false }
        ]
    }
];
const optionsSec = document.getElementById('options');
const optionsSecBtn = document.querySelector('#options button');
const questionTitle = document.getElementById('questionTitle');
const nextBtn = document.getElementById('nextButton');
const playAgainBtn = document.getElementById('restart');
const resetBtn = document.getElementById('resetButton')
const finish = document.getElementById('scoreDiv');
const scoreSec = document.getElementById('score');
const bb = document.getElementById('bb');

let currentQuestionIndex = 0;
let score = 0;
let hasAnswered = false;

function renderQuestions() {
    if (currentQuestionIndex < questions.length) {
        let currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion) {
            questionTitle.innerText = currentQuestion.question;
            optionsSec.innerHTML = '';

            currentQuestion.options.forEach(op => {
                const btn = document.createElement('button');
                btn.innerText = op.text;
                btn.classList.add('btn');
                optionsSec.append(btn);
                btn.addEventListener('click', (e) => {
                    if (!hasAnswered) {
                        optionCheck(op, e.target);
                        console.log(e.target);
                    }
                });
            });
        }
    } else {
        // All questions have been answered
        bb.style.display = 'none';
        finish.style.display = 'block';
        scoreSec.innerText = score;
    }
}

function optionCheck(option, btn) {
    hasAnswered = true;
    if (option.correct) {
        console.log("Correct Answer :)");
        btn.classList.remove('btn');
        btn.classList.add('correct');
        // optionsSecBtn.classList.add('true');
        score++;
    } else {
        console.log("Wrong Answer :(");
        // btn.classList.add('incorrect');
        // optionsSecBtn.classList.add('false');
        btn.style.backgroundColor = 'red';
        btn.style.color = 'aliceblue';
    }
    // currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestions();
    } else {
        console.log("questions finished !");
        console.log('your score is : ', score);
    }
}
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    hasAnswered = false;
    renderQuestions();
});
playAgainBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    hasAnswered = false;
    finish.style.display = 'none';
    bb.style.display = 'block';
    renderQuestions();
});
renderQuestions();