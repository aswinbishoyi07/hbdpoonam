// script.js

// ★★★ YOUR TREASURE HUNT QUESTIONS AND ANSWERS GO HERE ★★★
const clues = [
    {
        question: "What's the name of the first pet we ever had together? (One word)",
        answer: "fluffy" // Answer is NOT case-sensitive
    },
    {
        question: "Which city did we visit for our first family vacation outside our home state?",
        answer: "goa"
    },
    {
        question: "What's the name of the silly cartoon we used to watch every Saturday morning?",
        answer: "powerpuff girls"
    },
    {
        question: "What is the secret ingredient in Mom's famous birthday cake? (It's a fruit)",
        answer: "pineapple"
    },
    // This is the final message when all clues are solved
    {
        question: "Congratulations! You've solved all the riddles!",
        answer: "FINAL" // A placeholder answer, this won't be seen by the user
    }
];

let currentClueIndex = 0;

// Get HTML elements
const clueTitleElement = document.getElementById('clue-title');
const clueTextElement = document.getElementById('clue-text');
const answerInputElement = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-answer');
const feedbackTextElement = document.getElementById('feedback-text');
const gameContainer = document.querySelector('.game-container'); // To display final message

// Function to display the current clue
function displayClue() {
    if (currentClueIndex < clues.length - 1) {
        clueTitleElement.textContent = `Clue #${currentClueIndex + 1}`;
        clueTextElement.textContent = clues[currentClueIndex].question;
        feedbackTextElement.textContent = "";
        answerInputElement.value = "";
    } else {
        // All clues are solved
        gameContainer.innerHTML = `<h2 id="final-message">You did it!<br>Your final gift is waiting for you at [LOCATION OF THE GIFT]! Go find it!</h2>`;
    }
}

// Function to check the answer
function checkAnswer() {
    const userAnswer = answerInputElement.value.trim().toLowerCase();
    const correctAnswer = clues[currentClueIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedbackTextElement.textContent = "Correct! Here's the next clue...";
        feedbackTextElement.style.color = '#2ecc71'; // Green
        currentClueIndex++;
        
        // Wait a moment before showing the next clue
        setTimeout(displayClue, 1500);
    } else {
        feedbackTextElement.textContent = "Not quite! Try to remember...";
        feedbackTextElement.style.color = '#e74c3c'; // Red
        answerInputElement.focus();
    }
}

// Event Listeners
submitButton.addEventListener('click', checkAnswer);
// Allow pressing Enter to submit
answerInputElement.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});


// Initial display
displayClue();