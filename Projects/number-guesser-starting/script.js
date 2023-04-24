let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

const validNumber = (humanGuessInput) => {
    if (humanGuessInput > 9 || humanGuessInput < 0) {
        alert('Invalid Number! Please select a number between 0 and 9.');
    }
};

const getAbsoluteDistance = () => {

};

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - humanGuess)
    const computerDifference = Math.abs(secretTarget - computerGuess)
    return humanDifference <= computerDifference;
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};




