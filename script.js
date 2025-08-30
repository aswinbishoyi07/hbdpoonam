// script.js

// ★★★ YOUR TREASURE HUNT QUESTIONS AND ANSWERS GO HERE ★★★
const clues = [
    {
        question: "Late nights end here, with names on a page (find out the physical clue to get your gift and enter the stuff writte in the paper) (may be ask someone for it)",
        answer: "strong21" // Answer is NOT case-sensitive
    },
    {
        question: "Not a stage, just a mess. The place with bins and the place bishoyi lost his cool that's your place with the clue (find out the physical clue to get your gift and enter the stuff writte in the paper) (go there and just look around)",
        answer: "pandu21"
    },
    {
        question: "A room of mirrors, beats, and strain, Where bad chunks power your gain. Look inside where muscles grow, (find out the physical clue to get your gift and enter the stuff writte in the paper) ( lok for some poster, inside out)",
        answer: "happybirthdaypandujii"
    },
    {
        question: "Step inside, the mirrors glare, I press a floor, you’re unaware. (try to enter, you will find your thing)",
        answer: "stayhappy"
    },
    {
        question: "Plates, laughter, and late-night fun… find the place where it all began.(hint:look gor things jo aag lag jaaye to bachane ke liye use hote he, haath lagake dhundo) ",
        answer: "bhaalu"
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

