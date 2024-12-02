const questions = [
    {
        question: "Which among the following is not the concept of OOPS?",
        answers: [
            { text: "Encapsulation", correct: false },
            { text: "Abstraction", correct: false },
            { text: "Multithreading", correct: true },
            { text: "Polymorphism", correct: false }
        ]
    },
    {
        question: "Which feature of OOPS is used to derive a new class from an existing class?",
        answers: [
            { text: "Encapsulation", correct: false },
            { text: "Inheritance", correct: true },
            { text: "Polymorphism", correct: false },
            { text: "Abstraction", correct: false }
        ]
    },
    {
        question: "Which of these is not a type of inheritance in OOPS?",
        answers: [
            { text: "Single Inheritance", correct: false },
            { text: "Multiple Inheritance", correct: false },
            { text: "Multilevel Inheritance", correct: false },
            { text: "Modular Inheritance", correct: true }
        ]
    },
    {
        question: "What is it called when two methods in a class have the same name but different parameters?",
        answers: [
            { text: "Method Overloading", correct: true },
            { text: "Method Overriding", correct: false },
            { text: "Encapsulation", correct: false },
            { text: "Polymorphism", correct: false }
        ]
    },
    {
        question: "Which of the following best defines encapsulation?",
        answers: [
            { text: "Hiding unnecessary details and showing the essential details", correct: true },
            { text: "Deriving new classes from existing classes", correct: false },
            { text: "Binding data and methods into a single unit", correct: false },
            { text: "Accessing methods of a class through objects", correct: false }
        ]
    },
    {
        question: "Which of these concepts is often referred to as 'many forms'?",
        answers: [
            { text: "Inheritance", correct: false },
            { text: "Polymorphism", correct: true },
            { text: "Encapsulation", correct: false },
            { text: "Abstraction", correct: false }
        ]
    },
    {
        question: "What does the 'this' keyword refer to in an object-oriented context?",
        answers: [
            { text: "The current class", correct: false },
            { text: "The current object", correct: true },
            { text: "The parent class", correct: false },
            { text: "A static method", correct: false }
        ]
    },
    {
        question: "Which of these is used to define a blueprint for objects in OOPS?",
        answers: [
            { text: "Object", correct: false },
            { text: "Class", correct: true },
            { text: "Inheritance", correct: false },
            { text: "Encapsulation", correct: false }
        ]
    },
    {
        question: "Which feature of OOPS allows the same function name to have different implementations?",
        answers: [
            { text: "Abstraction", correct: false },
            { text: "Inheritance", correct: false },
            { text: "Polymorphism", correct: true },
            { text: "Encapsulation", correct: false }
        ]
    },
    {
        question: "What is the main purpose of an interface in OOPS?",
        answers: [
            { text: "To allow multiple inheritance", correct: true },
            { text: "To implement encapsulation", correct: false },
            { text: "To enforce abstraction", correct: false },
            { text: "To define private methods", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const nextButton = document.getElementById("next-btn")

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
    });
}
function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true
    });
    nextButton.style.display = "block"
}
function showScore(){
    resetState()
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"
}
function handleNextButton(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton()
    }
    else {
        startQuiz();
    }
})
startQuiz();