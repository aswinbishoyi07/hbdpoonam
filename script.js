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
    //day-2 starts from here....
        {
            question: "Main wahan hoon jahan taare (stars) aur grah (planets) raaz batate hain. Ek professor ke saathi ban kar, main kitaabon mein kho gayi. Meri project ka pehla akshar, Uske neeche mera agla raasta hai.",
            answer: "skincare@21"
        },
    // the gift is a minimalist thing
    {
        question: "A room where a tune plays with every step, where the memory of your every performance is hidden. Tumhare har kadam ka raaz, Ek sangeet bhare kamre ke andar chupa hai, Where every accessory of your performance and everythings is, (hint: you are a leader) ",
        answer: "youarebeautiful@21"
    },
    // tha gift is a lip balm
    {
        question: "theer is a guy who basically is useless. he has a place and head of multiple things. he did create troubles for you. basically he is the lazy ass and he has a boss who he reports. so find his place to get your clue.. ",
        answer: "fragrance@21"
    },
    // the gift is a scented candle

    {
        question: "there is this place where you feed your favourite animal. where they come running to you to just cuddle their body on your hand. (have a intense look) ",
        answer: "stayhealthy@21"
    },
    // the gift is a body milk
    // This is the final message when all clues are solved
    {
        question: "Congratulations! You've solved all the riddles!",
        answer: "FINAL" // A placeholder answer, this won't be seen by the user
    }
];

let currentClueIndex = 5;

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
        gameContainer.innerHTML = `<h2 id="final-message">You did it!<br>Your final gift is waiting for you at Prefab Guards! Go find it!</h2>`;
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


